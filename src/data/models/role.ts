import { Types, Schema, model, HydratedDocument } from 'mongoose';
import {IRole} from '../../commons/types';

const RoleSchema = new Schema<IRole>({
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


  export const Role = model<IRole>('Role', RoleSchema);
