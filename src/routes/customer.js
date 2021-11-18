const express = require("express");
const customersController = require("../controllers/customers-controller");

const customerRouter = (methods) => {
  const router = express.Router();
  const controller = customersController(methods);
  router.get("/", controller.fetchCustomers);
  router.post("/", controller.saveCustomer);
  router.put("/:id", controller.editOne);
  router.delete("/:id", controller.deleteOne);
  return router;
};
module.exports = customerRouter;
