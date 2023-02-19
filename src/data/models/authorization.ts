import { Types, Schema, model } from 'mongoose';
import * as types from '../../commons/types';

/*export interface IRoleModel extends types.IRole {
  _id: Schema.Types.ObjectId
}*/

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
    name: {type: String, required: true},
    users: [{type: Schema.Types.ObjectId, ref: "User"}],
    roles: [{type: Schema.Types.ObjectId, ref: "Role"}],

})
export const Project = model<types.IProject>('Project', ProjectSchema); 

const UserSchema = new Schema<types.IUser>({
    name: {type: String, required: true },
    role: [{type: Schema.Types.ObjectId, ref: 'Role' }]
});
export const User = model<types.IUser>('User', UserSchema);


  // Create the Role and Permission models
export const Role = model<types.IRole>('Role', RoleSchema);
export const Permission = model<types.IPermission>('Permission', PermissionSchema);
export const Resource = model<types.IResource>('Resource', ResourceSchema);

