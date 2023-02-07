import {Types} from 'mongoose'; 

export interface Permission {
    name: string,
    description: string
}

export interface IRole {
    name: string
    resources: Resource[],
    permissions: Permission[]
}

export interface Resource{
    resourceId: string 
}

export interface IUser {
    name: string,
    role: Types.ObjectId;
}
export interface IProject {
    name: string
}