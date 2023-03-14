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

  
  router.param("projectId", async (req:IRequest, res, next)=>{

    const projectId = new Types.ObjectId(req.params.projectId);
    req.context.projectId = projectId; 
    next()
  })
  
  router.all('*', context, authorize);
  // Get all projects from user
  router.get("/", controller.getAllProjectsFromUser);
  // Get specific project from user
  router.get("/:projectId", controller.getOneProject);
  // Add an user to a project
  router.post("/:projectId/user/:userToAddId", controller.addUserToOneProject);

  /* 



  router.put("/:projectId", controller.editProjectDetails);

  router.delete("/:projectId", controller.deleteOneProject);
*/
  return router;
};

