const express = require("express");
const authController = require("../controllers/auth-controller");

const authRouter = (methods) => {
  const router = express.Router();
  const controller = authController(methods);

  router.post("/login", controller.login);
  router.post("/register", controller.register);
  router.post("/forgotpassword", controller.forgotPassword);
  router.put("/resetpassword/:resetToken", controller.resetPassword);

  return router;
};

module.exports = authRouter;
