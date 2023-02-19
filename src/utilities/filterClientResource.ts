
import { IRole } from "../commons/types";
import { EResource } from "../commons/types";

export const filterClientResource = (role : IRole) : IRole | void => {


    if (role.resources.some(resource => resource.name.toUpperCase() === EResource.client)){
        return role
    }
}