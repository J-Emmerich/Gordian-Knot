const express = require("express");
const bugsController = require("../controllers/bug-tracker-controller");

const bugRouter = (methods) => {
  const router = express.Router();
  const controller = bugsController(methods);
  router.get("/", controller.fetchBugs);
  router.post("/", controller.saveBug);
  router.put("/:id", controller.editOne);
  router.delete("/:id", controller.deleteOne);
  return router;
};
module.exports = bugRouter;
