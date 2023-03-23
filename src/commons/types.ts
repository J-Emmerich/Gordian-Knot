import { Request } from 'express';
import {HydratedDocument, Types} from 'mongoose'; 


export interface IProject {
    _id?: Types.ObjectId
    name: string
    users: Array<IUser | Types.ObjectId>
    roles: Array<IRole | Types.ObjectId>
    isPrivate?: Boolean,
    isDefault?: Boolean
}

export interface IPermission {
    name: string,
}

export interface IRole {
    _id?: Types.ObjectId
    name: string
    resources: Array<IResource>,
    permissions: Array<IPermission>,
    project?: Types.ObjectId
}

export interface IResource{
    name: string 
}

export interface IUser {
    _id?: Types.ObjectId,
    passwordHash?: string,
    currentProject?: Types.ObjectId | IProject | HydratedDocument<IProject>,
    email: string,
    name: string,
    roles: Array<Types.ObjectId | IRole>,
    projects: Array<Types.ObjectId | IProject>
}


export interface IRequest extends Request{
    context: {
        projectId?: Types.ObjectId,
        user?: IUser,
        resourceName?: string,
        availableRoles?: IRole[],
        token?: string,
        currentProject?: HydratedDocument<IProject>
        secondaryUserId?: Types.ObjectId 
    } 
}

