import { Types, Schema, model } from 'mongoose';
import * as types from '../../commons/types';

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
    ]
  });

  const PermissionSchema = new Schema<types.Permission>({
    name: { type: String, required: true },
    description: { type: String, required: true }
  });
const ResourceSchema = new Schema<types.Resource>({
  resourceId: {type: String, required: true}
})

  // Create the Role and Permission models
export const Role = model<types.IRole>('Role', RoleSchema);
export const Permission = model<types.Permission>('Permission', PermissionSchema);
export const Resource = model<types.Resource>('Resource', ResourceSchema);

