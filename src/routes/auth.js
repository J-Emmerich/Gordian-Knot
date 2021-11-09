const express = require("express");
const authController = require("../controllers/auth-controller");

const authRouter = (methods) => {
  const router = express.Router();
  const controller = authController(methods);

  router.post("/login", controller.login);

  // Not available until app is on production

  // router.post("/register", controller.register);
  // router.post("/google/auth", controller.googleAuth);

  return router;
};

module.exports = authRouter;
