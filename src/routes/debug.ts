import * as express from "express";
import { IUser } from "@commons/types";
import { getAllUsersFromDatabase, purgeModel } from "@utilities";
import { Types } from "mongoose";
import { Project, Role, User } from "@models";

export const debugRouter = () => {
  const router = express.Router();

  router.get("/allUsers", async (_req, res) => {
    const allUsers: IUser[] | null[] = await getAllUsersFromDatabase();
    if (allUsers.length < 1) return res.status(404).send("No users at all");
    return res.status(200).json(allUsers);
  });
  router.get("/allProjectDetails/:projectId", async (req, res) => {
    const projectId = new Types.ObjectId(req.params.projectId);
    const project = await Project.findById(projectId).populate("roles");
    res.status(200).json(project);
  });

  router.get("/allProjectsAndAllDetails", async (_req, res) => {
    const project = await Project.find({}).populate(["roles", "users"]);
    res.status(200).json(project);
  });


  router.delete("/deleteAll", async (_req, res) => {
    await purgeModel(Project);
    await purgeModel(Role);

    await purgeModel(User);

    res.status(200).send("All deleted");
  });
  return router;
};
