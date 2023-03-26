import * as express from "express";
import { authorize, context } from "@middlewares";
import { userController } from "../controllers/userController";

export const userRouter = (methods: any) => {
  const router = express.Router();
  const controller = userController(methods);

  router.all("*", context, authorize);
  router.put("/current", controller.updateCurrentProject);

  return router;
};
