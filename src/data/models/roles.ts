import { Types, Schema, model, HydratedDocument, SchemaType } from 'mongoose';
import {IPermission, IResource, IRole} from '@commons/types';

const ResourceSchema = new Schema<IResource>({name: {type: String, uppercase: true}}, {_id: false})
const PermissionSchema = new Schema<IPermission>({name: {type: String, uppercase: true}}, {_id: false})

const RoleSchema = new Schema<IRole>({
    name: { type: String, required: true, lowercase: true },
    resources: [ResourceSchema],
    permissions: [PermissionSchema],
    project: {type: Schema.Types.ObjectId, ref: 'Project'}
  });


  export const Role = model<IRole>('Role', RoleSchema);
