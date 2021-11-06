const express = require("express");
const invoiceController = require("../controllers/invoice-controller");

const invoiceRouter = (methods) => {
  const router = express.Router();
  const controller = invoiceController(methods);

  router.get("/", controller.fetchAll);
  router.get("/:id", controller.fetchOne);
  router.put("/:id", controller.editOne);
  router.post("/", controller.saveOne);
  router.get("/download/:id", controller.fetchPdf);

  return router;
};
console.log("this is the invoiceRouter", invoiceRouter);
module.exports = invoiceRouter;
