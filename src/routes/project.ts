/* 
Projects
A user can create a project (he will be automatically Admin)
A user can delete a project -> he must be admin (soft/hard delete should be implemented?)
A user can edit a project -> name and description of the project

A user can invite other user to the project (either someone with an account or not)
A user can remove another user from the project (and the role he has in the project should be removed too)


// ========== //


A user can edit the role of an user
A user can edit the roles inside a project -> create a role for the project, edit the name of a role. 

//============== //


*/

import * as express from 'express';
import { authorize } from '../middlewares/authorize';
import { projectController } from '../controllers/projectController'
import { context } from '../middlewares/context';
import { Types } from 'mongoose';
import { IRequest } from '../commons/types';

export const projectRouter = (methods : any) => {
  const router = express.Router();
  const controller = projectController(methods);

  
  router.all('*', context)
  router.param("projectId", async (req:IRequest, res, next)=>{
    console.log(req.params.projectId, "project id params"); 
    const projectId = new Types.ObjectId(req.params.projectId);
    if(!req.context) req.context = {}
    req.context.projectId = projectId; 
    console.log( req.context.projectId)
    next()
  })

  router.get("/", controller.getAllProjects);
  router.get("/:projectId", controller.getOneProject);
  
  router.post("/", controller.createOneUser);
  router.post("/:projectId/users", controller.addUserToProject)
  /* 



  router.put("/:projectId", controller.editProjectDetails);

  router.delete("/:projectId", controller.deleteOneProject);
*/
  return router;
};

