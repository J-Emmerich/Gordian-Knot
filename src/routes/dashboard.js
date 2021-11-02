const express = require("express");
const dashboardController = require("../controllers/dashboard-controller");
console.log("this is the dashboardController", dashboardController);
// const { Project } = require("../data/index");

const dashboardRouter = (methods) => {
  const router = express.Router();
  const controller = dashboardController(methods);
  console.log(controller, "controller-dash");
  console.log(controller.fetchCurrentProject);
  console.log(controller.saveProject);

  router.get("/", controller.fetchCurrentProject);
  router.post("/", controller.saveProject);
  return router;
};
console.log("this is the dashboardRouter", dashboardRouter);
module.exports = dashboardRouter;
