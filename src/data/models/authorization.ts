import { Types, Schema, model, HydratedDocument } from 'mongoose';
import * as types from '../../commons/types';

/*export interface IRoleModel extends types.IRole {
  _id: Schema.Types.ObjectId
}*/

const createDefaultProject = async (userDoc :  types.IUser) => {
  const project : HydratedDocument<types.IProject>  = new Project(); 
  const role : HydratedDocument<types.IRole> = new Role({name: 'Admin-U'}); 
  let resources : any = Resource.find({}); 
  let permissions : any = Permission.find({}); 
   [resources, permissions] = await Promise.all([resources, permissions]); 
   resources.forEach((resource:types.IResource) => {
    return role.resources.push(resource._id as Types.ObjectId);
  });
  permissions.forEach((permission: types.IPermission) =>role.permissions.push(permission._id as Types.ObjectId))
  await role.save()
  userDoc.role.push(role._id); 
  project.roles.push(role._id);
  project.users.push(userDoc._id as Types.ObjectId); 
  await project.save(); 
  return project
}

const RoleSchema = new Schema<types.IRole>({
    name: { type: String, required: true },
    resources: [ 
      {
      type: Schema.Types.ObjectId,
      ref: 'Resource'
    }
    ],
    permissions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Permission'
      }
    ],
    project: {type: Schema.Types.ObjectId, ref: 'Project'}
  });

  const PermissionSchema = new Schema<types.IPermission>({
    name: { type: String, required: true },
    description: { type: String, required: true }
  });
const ResourceSchema = new Schema<types.IResource>({
  name: {type: String, required: true}
})



const ProjectSchema = new Schema<types.IProject>({
    name: {type: String, required: true, default: "Personal"},
    users: [{type: Schema.Types.ObjectId, ref: "User"}],
    roles: [{type: Schema.Types.ObjectId, ref: "Role"}],

})
export const Project = model<types.IProject>('Project', ProjectSchema); 

const UserSchema = new Schema<types.IUser>({
    name: {type: String, required: true },
    role: [{type: Schema.Types.ObjectId, ref: 'Role' }],
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}]
});



UserSchema.pre('save', async function (this : types.IUser) {
  console.log(this._id, "id of the user");

  if(this._id && this.projects.length === 0){
    console.log("inside if statement", this.projects.length)
   const project : HydratedDocument<types.IProject> = await createDefaultProject(this);
   project.users.push(this._id);
   this.projects.push(project._id); 
   console.log(this.projects.length, project); 
  }
})

export const User = model<types.IUser>('User', UserSchema);


  // Create the Role and Permission models
export const Role = model<types.IRole>('Role', RoleSchema);
export const Permission = model<types.IPermission>('Permission', PermissionSchema);
export const Resource = model<types.IResource>('Resource', ResourceSchema);

