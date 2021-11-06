const express = require("express");
const dashboardController = require("../controllers/dashboard-controller");

const dashboardRouter = (methods) => {
  const router = express.Router();
  const controller = dashboardController(methods);
  router.get("/", controller.fetchCurrentProject);
  router.post("/", controller.saveProject);
  return router;
};
console.log("this is the dashboardRouter", dashboardRouter);
module.exports = dashboardRouter;
