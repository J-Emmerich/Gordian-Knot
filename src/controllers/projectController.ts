import { Request, Response, NextFunction } from "express";
import { IRequest, IUser } from "../commons/types";
import { Project, User } from "../data/models";
import { createUser } from "../data/methods/users";
import { HydratedDocument } from "mongoose";
import { IProject } from "../commons/types";


export const projectController = (methods : any) => {
const getAllProjectsFromUser = async (req : IRequest, res : Response, next: NextFunction) => {

    const populatedUser = await User.findById(req.context.user!._id).populate('projects', 'name'); 
if(!populatedUser?.populated('projects')) return res.status(404).send("not populated"); 
    res.status(299).json(populatedUser.projects);
    res.end();

}
const getOneProject = async (req : IRequest, res : Response, next: NextFunction) => {
if(!req.context?.projectId) return res.status(404).send("No project Id")


const project : HydratedDocument<IProject> | null = await Project.findById(req.context.projectId); 
if(!project) return res.status(404).send("No project");     
// === verify that the user has the right to check for this project === //
project.users = project.users.filter((user: IUser)=>user._id === req.context.user!._id);
if(project.users.length<1) return res.status(404).send("No project"); 
// === //

res.status(200).json(project);
    res.end();

}
    const addUserToProject = async (req : Request, res : Response, next: NextFunction) => {
     
        res.status(299).send("POST");
    }


const createOneUser = async (req : Request, res : Response, next: NextFunction) => {

    const user = await createUser("User-U"); 
    // console.log(user); 
    
    res.status(201).json(user);
}
const deleteR = async (req : Request, res : Response, next: NextFunction) => res.status(299).send("DELETE");

return { getAllProjectsFromUser, addUserToProject, createOneUser,getOneProject,  deleteR };
};