
import { IRole } from "../commons/types";
import { EPermision } from "../commons/types";

export const filterReadPermission = (role : IRole) : IRole | void => {


    if (role.permissions.some(permission => permission.name.toUpperCase() === EPermision.read)){
        return role
    }
}