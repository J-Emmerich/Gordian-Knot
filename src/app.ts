require('dotenv').config('../.env')
import * as express from 'express';
import { projectRouter } from './routes/project';

// Connects to MongoDB Atlas
const connection = require('./data/connection');

const app = express();
const port:number = 3000;

app.use(express.json())
app.use("/api/project", projectRouter(1));



app.listen(port, ()=> console.log("App is listening to port" + port)); 

