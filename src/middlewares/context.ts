import { Response, Request, NextFunction } from "express";
import { IRequest, EResource } from "../commons/types";

export const context = async (req : IRequest, res: Response, next: NextFunction) => {

// Trim the /api/ part of the base url and convert to uppercase
const indexOfLastPath = req.baseUrl.lastIndexOf("/") + 1
let resource = req.baseUrl.substring(indexOfLastPath).toUpperCase(); 

// If exist in the list of resources save in the context, otherwise close connection
    if(Object.values(EResource).includes(resource as EResource)){
        req.context.resourceName = resource as EResource;
    } else return res.status(404).send("Resource not found");
    next()
}