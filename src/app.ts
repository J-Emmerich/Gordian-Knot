require('dotenv').config('../.env')
import * as express from 'express';
import { projectRouter, authenticationRouter } from './routes';
import {createContext, purgeModel} from './utilities';
import { errorHandler, logError, authenticate } from './middlewares';
import { createRolesAndPermissionsAndResources } from './data/methods/authorization';
import { Permission, Project, Resource, Role, User } from './data/models';
import { debugRouter  } from './routes/debug';

// Connects to MongoDB Atlas
const connection = require('./data/connection');

const app = express();
const port:number = 3000;


app.use(express.json());
app.all('*', createContext);
// app.use("/debug", debugRouter()); ===== DEBUG DEBUG DEBUG 
app.use("/user", authenticationRouter());
app.all('/api/*', authenticate)
app.use("/api/project", projectRouter(1));
app.use(logError);
app.use(errorHandler);


app.listen(port, ()=> console.log("App is listening to port" + port)); 

