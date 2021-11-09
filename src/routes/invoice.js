const express = require("express");
const invoiceController = require("../controllers/invoice-controller");

const invoiceRouter = (methods) => {
  const router = express.Router();
  const controller = invoiceController(methods);

  router.get("/", controller.fetchAll);
  router.get("/:id", controller.fetchOne);
  router.put("/:id", controller.editOne);
  router.post("/", controller.saveOne);
  router.delete("/:id", controller.deleteOne);
  router.get("/download/:id", controller.fetchPdf);

  return router;
};

module.exports = invoiceRouter;
