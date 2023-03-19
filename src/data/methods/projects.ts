import { IUser, IProject, IRole, IResource, IPermission } from "../../commons/types";
import { HydratedDocument, Types } from "mongoose";
import { Project, Role, Resource, Permission } from "../models";

export const createProjectAndSaveUser = async (userDoc : HydratedDocument<IUser>, projectName: string, roleName: string, isPrivate : boolean) => {
    const project : HydratedDocument<IProject>  = new Project({name: projectName, isPrivate}); 
    const role : HydratedDocument<IRole> = new Role({name: roleName, project: project._id}); 
    let resources : any = Resource.find({}); 
    let permissions : any = Permission.find({}); 
     [resources, permissions] = await Promise.all([resources, permissions]); 
     resources.forEach((resource:IResource) => {
      return role.resources.push(resource._id as Types.ObjectId);
    });
    permissions.forEach((permission: IPermission) =>role.permissions.push(permission._id as Types.ObjectId))
    await role.save(); // Role should be saved first
    userDoc.role.push(role._id); 
    userDoc.projects.push(project._id);
    project.roles.push(role._id);
    project.users.push(userDoc._id as Types.ObjectId); 
    await Promise.all([project.save(), userDoc.save()]); 
    return project
  }