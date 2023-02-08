require('dotenv').config('../.env')
import {createRolesAndPermissions} from './data/methods/authorization';


const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('./data/connection');

const app = express();
const port:number = 3000;
createRolesAndPermissions()



app.listen(port, ()=> console.log("App is listening to port" + port)); 

