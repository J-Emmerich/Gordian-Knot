
import { IRole, IPermission, EPermision } from "@commons/types";


export const filterReadPermission = (role : IRole) : IRole | void => {


    if (role.permissions.some((permission:IPermission )=> permission.name.toUpperCase() === EPermision.read)){
        return role
    }
}