
import { IRole,IResource, EResource } from "@commons/types";

export const filterClientResource = (role : IRole) : IRole | void => {


    if (role.resources.some((resource:IResource) => resource.name.toUpperCase() === EResource.client)){
        return role
    }
}