import {Types} from 'mongoose'; 


export interface IProject {
    _id?: Types.ObjectId
    name: string
    usersAndRoles: [{user: Types.ObjectId, role: Types.ObjectId}]
}

export interface IPermission {
    _id?: Types.ObjectId
    name: string,
    description: string
}

export interface IRole {
    _id?: Types.ObjectId
    name: string
    resources: IResource[],
    permissions: IPermission[]
}

export interface IResource{
    _id?: Types.ObjectId
    resourceId: string 
}

export interface IUser {
    _id?: Types.ObjectId
    name: string,
    role: IRole;
}
