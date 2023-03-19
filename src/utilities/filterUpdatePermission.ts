
import { IRole,IPermission, EPermision } from "../commons/types";

export const filterUpdatePermission = (role : IRole) : IRole | void => {


    if (role.permissions.some((permission:IPermission) => permission.name.toUpperCase() === EPermision.update)){
        return role
    }
}