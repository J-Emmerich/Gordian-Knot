
import { Types, Schema, model, HydratedDocument } from 'mongoose';
import { setDefaultProjectForUser, setDefaultProjectForUserWithoutSave } from '@utilities';
import * as types from '@commons/types';
import {Resource, Permission, Project, Role} from '@models'
const uniqueValidator = require("mongoose-unique-validator");

/*export interface IRoleModel extends types.IRole {
  _id: Schema.Types.ObjectId
}*/

const createDefaultProject = async (userDoc :  types.IUser) => {
  const project : HydratedDocument<types.IProject>  = new Project({name: userDoc._id?.toString(), isPrivate: true}); 
  const role : HydratedDocument<types.IRole> = new Role({name: 'Admin', project: project._id}); 
  let resources : any = Resource.find({}); 
  let permissions : any = Permission.find({}); 
   [resources, permissions] = await Promise.all([resources, permissions]); 
   resources.forEach((resource:types.IResource) => {
    return role.resources.push(resource._id as Types.ObjectId);
  });
  permissions.forEach((permission: types.IPermission) =>role.permissions.push(permission._id as Types.ObjectId))
  await role.save(); // Maybe this could run in parallel with the project save
  userDoc.role.push(role._id); 
  project.roles.push(role._id);
  project.users.push(userDoc._id as Types.ObjectId); 
  await project.save(); 
  return project
}


const UserSchema = new Schema<types.IUser>({
    name: {type: String, required: true },
    passwordHash: {type: String, select: false, required: true},
    email: {type: String, required: true, unique: true},
    role: [{type: Schema.Types.ObjectId, ref: 'Role' }],
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
    currentProject: {type: Schema.Types.ObjectId, ref: 'Project'},
});



UserSchema.pre('save', async function (this : HydratedDocument<types.IUser>) {

  if(this._id && this.projects.length === 0){
   const project : HydratedDocument<types.IProject> = await createDefaultProject(this);
   project.users.push(this._id);
   this.projects.push(project._id); 
  }
  await setDefaultProjectForUserWithoutSave(this)
  
})
UserSchema.plugin(uniqueValidator, { type: "mongoose-unique-validator" });

export const User = model<types.IUser>('User', UserSchema);



