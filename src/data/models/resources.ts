import { Types, Schema, model, HydratedDocument } from 'mongoose';
import * as types from '../../commons/types';

const ResourceSchema = new Schema<types.IResource>({
    name: {type: String, required: true}
  })

export const Resource = model<types.IResource>('Resource', ResourceSchema);
