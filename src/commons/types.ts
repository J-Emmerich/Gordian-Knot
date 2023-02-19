import {Types} from 'mongoose'; 


export interface IProject {
    _id?: Types.ObjectId
    name: string
    users: IUser[]
    roles: IRole[]
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
    permissions: IPermission[],
    project?: IProject
}

export interface IResource{
    _id?: Types.ObjectId
    name: string 
}

export interface IUser {
    _id?: Types.ObjectId
    name: string,
    role: IRole[];
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
    client = "CLIENT"
}
