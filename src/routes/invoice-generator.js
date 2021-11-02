const express = require("express");
const invoiceController = require("../controllers/invoice-controller");
console.log("this is the controler", invoiceController);

const invoiceRouter = (methods) => {
  const router = express.Router();
  const controller = invoiceController(methods);

  router.get("/", controller.fetchInvoices);
  router.get("/:id", controller.fetchOne);
  router.post("/", controller.saveToPdf);

  return router;
};
console.log("this is the invoiceRouter", invoiceRouter);
module.exports = invoiceRouter;
