require('dotenv').config('../.env')
import {createRolesAndPermissions} from './data/methods/authorization';
import {createUser, findUserById} from './data/methods/users';

const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('./data/connection');

const app = express();
const port:number = 3000;
// createRolesAndPermissions()
createUser("Anna")
findUserById("João");


app.listen(port, ()=> console.log("App is listening to port" + port)); 

