import * as express from "express";

const settingController = require("../controllers/setting-controller");

export const settingRouter = (methods) => {
  const router = express.Router();
  const controller = settingController(methods);
  router.get("/", controller.fetchAll);
  router.get("/user", controller.fetchUser);
  router.put("/", controller.editCurrentOne);
  router.put("/:id", controller.editOne);
  router.post("/", controller.createProject);

  return router;
};

module.exports = settingRouter;
