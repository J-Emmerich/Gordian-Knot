import { Types, Schema, model, HydratedDocument } from 'mongoose';
import * as types from '@commons/types';

const PermissionSchema = new Schema<types.IPermission>({
    name: { type: String, required: true },
    description: { type: String, required: true }
  });

  export const Permission = model<types.IPermission>('Permission', PermissionSchema);
