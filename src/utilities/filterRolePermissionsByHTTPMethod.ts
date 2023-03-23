import { IRole, IPermission } from "@commons/types";

export const filterRolePermissionsByHTTPMethod = (role: IRole, method: string) : IRole | null => {
if(method === 'GET') method = "READ"; 
if(method === 'PUT') method = "UPDATE";
if(method === 'POST') method = 'CREATE';

    if (role.permissions.some((permission:IPermission) => permission.name.toUpperCase() === method.toUpperCase())){
 console.log("here", role.permissions)
        return role
    } else return null
}