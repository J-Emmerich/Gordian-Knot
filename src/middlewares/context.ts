import { Response, Request, NextFunction } from "express";
import { IRequest, EResource, IRole, IResource } from "@commons/types";

export const context = async (req : IRequest, res: Response, next: NextFunction) => {
// Trim the /api/ part of the base url and convert to uppercase
const indexOfLastPath = req.baseUrl.lastIndexOf("/") + 1
let resource = req.baseUrl.substring(indexOfLastPath).toUpperCase(); 
let filteredRolesFromContext : IRole[] | [];
// If exist in the list of resources save in the context, otherwise close connection
    if(Object.values(EResource).includes(resource as EResource)){
        req.context.resourceName = resource as EResource;

// Define the Available roles in the project
req.context.currentProject = await req.context.currentProject!.populate({path:'roles', populate: ['resources', 'permissions']});; 
req.context.availableRoles = req.context.currentProject.roles as IRole[]; 

if(req.context.availableRoles.length < 1) return res.status(404).send("Role not available");
//filterRoles That have the same resource as the route being used
filteredRolesFromContext = req.context.availableRoles.filter((role : IRole) =>{
    if (role.resources.some((resource:IResource) => resource.name.toUpperCase() === req.context.resourceName)){
        return role  
}})
    } else return res.status(404).send("Resource not found");
   
    if(filteredRolesFromContext.length < 1) return res.status(404).send("Resource not available in roles");
   req.context.availableRoles = filteredRolesFromContext; 
    next()
}