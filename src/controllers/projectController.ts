import { Request, Response, NextFunction } from "express";
import { IRequest, IUser } from "../commons/types";
import { Project, User } from "../data/models";
import { createUser } from "../data/methods/users";
import { HydratedDocument, Types } from "mongoose";
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
// === verify that the user has this project in his list. Otherwise denegate === // 
project.users = project.users.filter((user: IUser)=>user._id?.toString() === req.context.user!._id?.toString());
if(project.users.length<1) return res.status(404).send("User is not in the project"); 
// === // Shouldn't this be done by the authorize function? 

res.status(200).json(project);

}
const addUserToOneProject = async (req : IRequest, res : Response, next: NextFunction) => {

    const project : HydratedDocument<IProject> | null = await Project.findById(req.context.projectId); 
    if(!project) return res.status(404).send("No project");     
    // === verify that the user has this project in his list. Otherwise denegate === // 
    project.users = project.users.filter((user: IUser)=>user._id?.toString() === req.context.user!._id?.toString());
    if(project.users.length<1) return res.status(404).send("User is not in the project"); 
    // === // Shouldn't this be done by the authorize function? 
if(!req.params.userToAddId) return res.status(404).send("No user to add to project"); 
const userToAddId = new Types.ObjectId(req.params.userToAddId); 
const isUserInDatabase = await User.exists({_id: userToAddId})
if(isUserInDatabase === null) return res.status(404).send("ce user est nulle"); 
project.users.push(userToAddId); 
await project.save(); 

    
        res.status(200).send(project);
    }



return { getAllProjectsFromUser, addUserToOneProject,getOneProject};
};