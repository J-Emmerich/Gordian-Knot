import { Request, Response, NextFunction } from "express";
import { IRequest } from "../commons/types";
import { Project } from "../data/models";
import { createUser } from "../data/methods/users";
import { HydratedDocument } from "mongoose";
import { IProject } from "../commons/types";


export const projectController = (methods : any) => {
const getAllProjects = async (req : Request, res : Response, next: NextFunction) => {


    res.status(299).send("GETAllProjects");
    res.end();

}
const getOneProject = async (req : IRequest, res : Response, next: NextFunction) => {
if(!req.context?.projectId) return res.status(404).send("No project Id")
const project : HydratedDocument<IProject> | null = await Project.findById(req.context.projectId); 
if(!project) return res.status(404).send("No project");     
res.status(299).json(project);
    res.end();

}
    const addUserToProject = async (req : Request, res : Response, next: NextFunction) => res.status(299).send("POST");
const createOneUser = async (req : Request, res : Response, next: NextFunction) => {

    const user = await createUser("User-U"); 
    // console.log(user); 
    
    res.status(201).json(user);
}
const deleteR = async (req : Request, res : Response, next: NextFunction) => res.status(299).send("DELETE");

return { getAllProjects, addUserToProject, createOneUser,getOneProject,  deleteR };
};