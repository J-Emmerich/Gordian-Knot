
import { IRole,IResource } from "../commons/types";
import { EResource } from "../commons/types";

export const filterClientResource = (role : IRole) : IRole | void => {


    if (role.resources.some((resource:IResource) => resource.name.toUpperCase() === EResource.client)){
        return role
    }
}