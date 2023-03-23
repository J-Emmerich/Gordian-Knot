
import { IRole,IResource} from "@commons/types";
import { EResource } from "@commons/enumerators";

export const filterClientResource = (role : IRole) : IRole | void => {


    if (role.resources.some((resource:IResource) =>  EResource.has(resource.name.toUpperCase()))){
        return role
    }
}