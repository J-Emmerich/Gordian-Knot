import * as express from "express";

import { invoiceController } from "../controllers/invoice-controller";

export const invoiceRouter = () => {
  const router = express.Router();
  const controller = invoiceController();

  router.get("/", controller.fetchAll);
  router.get("/:id", controller.fetchOne);
  router.put("/:id", controller.editOne);
  router.post("/", controller.saveOne);
  router.delete("/:id", controller.deleteOne);
  router.get("/download/:id", controller.fetchPdf);

  return router;
};
