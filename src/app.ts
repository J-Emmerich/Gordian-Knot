require('dotenv').config('../.env')
import { NextFunction, Request, Response } from 'express';
import {createRolesAndPermissions} from './data/methods/authorization';
import { findUserByName, assignToUserByIdRoleByName, createUser } from './data/methods/users';
import { authorize } from './middlewares/authorize';


import * as express from 'express';
import { HydratedDocument } from 'mongoose';
import { IUser } from './commons/types';
const jwt = require('jsonwebtoken');
const connection = require('./data/connection');

const app = express();
const port:number = 3000;


app.use(express.json())

app.get('/user/:id',authorize, (req, res) => {

    res.send(`user ${req.params.id}, you're authorized`)
  })


app.get('/', async (req: Request, res: Response, next: NextFunction) =>{
const thingToSay = req.params.id;
res.status(200).send(thingToSay); 
});
app.post('/', async(req: Request, res: Response)=> {
    let cs :  HydratedDocument<IUser> | null= await findUserByName("Joao");
    // if(!cs) cs = await createUser("Joao");
    if(!cs) {res.end();} else{

    //    const role = await assignToUserByIdRoleByName(cs._id, "User")
        await cs.populate({path: 'role'});
      res.status(200).json({ user: cs});
    }

})

app.listen(port, ()=> console.log("App is listening to port" + port)); 

