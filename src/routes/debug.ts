import * as express from 'express';
import { IUser } from '../commons/types';
import { getAllUsersFromDatabase } from '../utilities'; 
import { Types } from 'mongoose';
import { Project } from '../data/models'; 


export const debugRouter = () => {
    const router = express.Router();



    router.get('/allUsers', async(req, res) => {
        const allUsers : IUser[] | null[] = await getAllUsersFromDatabase(); 
        if(allUsers.length < 1) return res.status(404).send("No users at all");
        return res.status(200).json(allUsers); 
    })
router.get('/allProjectDetails/:projectId', async(req, res)=> {
    const projectId = new Types.ObjectId(req.params.projectId); 
    const project = await Project.findById(projectId).populate('roles'); 
    res.status(200).json(project);
})

router.get('/allProjectsAndAllDetails', async(req, res)=> {
    const project = await Project.find({}).populate(['roles', 'users']); 
    res.status(200).json(project);
})

router.get('/testSlice', async(req, res)=> {
    const array = [{name: 1}, {name: 2}, {name: 3}, {name:4}]; 
    const bigObject = {users: array}; 
    console.log("this is the big object", bigObject); 
    const index = bigObject.users.findIndex(user => user.name === 2); 
    const newArr = bigObject.users.slice(0, index); 
    console.log(newArr); 
    const secArr = bigObject.users.slice(-index); 
    console.log(secArr);   
    console.log(bigObject.users); 


    return res.status(322).json(bigObject); 
})

    return router;
  };
  