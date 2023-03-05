import { Request } from 'express';
import {Types} from 'mongoose'; 


export interface IProject {
    _id?: Types.ObjectId
    name: string
    users: Array<IUser | Types.ObjectId>
    roles: Array<IRole | Types.ObjectId>
}

export interface IPermission {
    _id?: Types.ObjectId
    name: string,
    description: string
}

export interface IRole {
    _id?: Types.ObjectId
    name: string
    resources: Array<IResource | Types.ObjectId>,
    permissions: Array<IPermission | Types.ObjectId>,
    project?: IProject
}

export interface IResource{
    _id?: Types.ObjectId
    name: string 
}

export interface IUser {
    _id?: Types.ObjectId
    name: string,
    role: Array<Types.ObjectId | IRole>,
    projects: Array<Types.ObjectId | IProject>
}

export interface IAuthorization {
   requiredRole: ERole,
   requiredResource: EResource,
   requiredPermission: EPermision
}

export interface IRouterContext {
    resourceName: EResource,
    availableRoles: IRole[]
}

export interface IRequest extends Request{
    context?: {
        projectId?: Types.ObjectId,
        userId?: Types.ObjectId,
        user?: IUser,
        resourceName?: EResource,
        availableRoles?: IRole[],
    } 
}

// ======================= // ================ // =============



export enum EPermision {
    create = "CREATE",
    read = "READ",
    update = "UPDATE",
    delete = "DELETE"
}

export enum ERole {
    admin = "ADMIN",
    user = "USER",
    invAdmin = "INVADMIN",
    clientAdmin = "CLIENTADMIN",
    invUser = "INVUSER",
    clientUser = "CLIENTUSER"
    }

export enum EResource {
    invoice = "INVOICE",
    client = "CLIENT",
    project = "PROJECT"
}
