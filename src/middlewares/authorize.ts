import { NextFunction } from "express";
import {Types, HydratedDocument} from 'mongoose';
import { User, Role, Project } from "../data/models";
import { IUser, IRole, ERole, EPermision, EResource } from "../commons/types";
import { isRoleInBothArrays, filterReadPermission, filterClientResource } from "../utilities";

export const authorize = async (req: any, res: any, next: NextFunction) => {

// this should be done by the authentication function
// It must make the id of the project as ObjectId from mongoose
const projectId = new Types.ObjectId(req.params.projectId)
req.route = {context: {resourceName: {}, availableRoles: []}}; 
// =============================================== //
// This should be created by the context middleware set in each Router object.
req.route.context.resourceName = EResource.client;
const projectRoles =  await Project.findById(projectId, {roles: 1, _id: 0}).populate({path:'roles', populate: ['resources', 'permissions']});
req.route.context.availableRoles = projectRoles?.roles;
console.log(req.route);

    // Transform string param to objectId and Find the user
    const id = new Types.ObjectId(req.params.id);
    const user : HydratedDocument<IUser> | null | undefined = await User.findById(id).populate({path:'role', populate: ['resources', 'permissions']});
    // Check if user was found and has roles
    if (!user || user === undefined) return res.status(401).send('Access denied. User not found.');
    if(!user.populated('role')) return res.status(401).send('Access denied. Cant populate role');
    console.log(user.role)
  
// Check the method of the request 
// By now it will assume is GET
let filteredRolesFromContext : IRole[] | [];
let hasPermission : Boolean = false;
if(req.method === "GET"){
//filterRoles That have the same resource <=== this can be done in context
  filteredRolesFromContext = req.route.context.availableRoles.filter(filterClientResource)
 console.log(filteredRolesFromContext, "first filter")
  // filter roles that have the READ permission
filteredRolesFromContext  = req.route.context.availableRoles.filter(filterReadPermission);
console.log(filteredRolesFromContext, "second filter")

if (!filteredRolesFromContext.length) return res.status(403).send(`Access denied. No permissions set for this`)
// check if the user has the permission to READ the resource
 hasPermission = isRoleInBothArrays(filteredRolesFromContext, user.role);
}

    if (!hasPermission) return res.status(403).send(`Access denied. Not your role`);
    next();
  };

   