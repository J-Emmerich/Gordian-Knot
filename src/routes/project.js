const express = require("express");
const projectController = require("../controllers/project-controller");

const projectRouter = (methods) => {
  const router = express.Router();
  const controller = projectController(methods);

  router.get("/", controller.fetchAll);
  router.get("/user", controller.fetchUser);
  router.get("/:id", controller.fetchOne);
  router.put("/:id", controller.editOne);
  router.post("/", controller.saveOne);
  router.delete("/:id", controller.deleteOne);

  return router;
};

module.exports = projectRouter;
