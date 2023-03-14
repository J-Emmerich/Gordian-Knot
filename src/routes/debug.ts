import * as express from 'express';
import { IUser } from '../commons/types';
import { getAllUsersFromDatabase } from '../utilities'; 


export const debugRouter = () => {
    const router = express.Router();



    router.get('/allUsers', async(req, res) => {
        const allUsers : IUser[] | null[] = await getAllUsersFromDatabase(); 
        if(allUsers.length < 1) return res.status(404).send("No users at all");
        return res.status(200).json(allUsers); 
    })

    return router;
  };
  