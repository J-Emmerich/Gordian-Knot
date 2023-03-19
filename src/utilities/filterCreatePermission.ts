
import { IRole, IPermission, EPermision } from "@commons/types";


export const filterCreatePermission = (role : IRole) : IRole | void => {


    if (role.permissions.some((permission:IPermission) => permission.name.toUpperCase() === EPermision.create)){
        return role
    }
}