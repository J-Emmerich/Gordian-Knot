import {HydratedDocument, Schema, model, Types, Document} from 'mongoose';
import { IUser, IProject } from '../../commons/types';
import { Role } from './authorization';


// The same interface is used for the schema and the model.

const ProjectSchema = new Schema<IProject>({
    name: {type: String, required: true}
})
export const Project = model<IProject>('Project', ProjectSchema); 

const UserSchema = new Schema<IUser>({
    name: {type: String, required: true },
    role: {type: Schema.Types.ObjectId, ref: 'Role' }
});
export const User = model<IUser>('User', UserSchema);

