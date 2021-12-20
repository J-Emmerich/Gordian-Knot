const express = require("express");
const userController = require("../controllers/user-controller");

const userRouter = (methods) => {
  const router = express.Router();
  const controller = userController(methods);

  router.put("/", controller.editOne);
  
  return router;
};

module.exports = userRouter;