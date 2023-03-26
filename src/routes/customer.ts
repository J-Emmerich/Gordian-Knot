import { IRequest } from "@commons/types";
import { NextFunction, Response, Router } from "express";
import { Types } from "mongoose";
import { customersController } from "../controllers/customers-controller";

export const customerRouter = () => {
  const router = Router();
  const controller = customersController();

  router.param(
    "secondaryUserId",
    async (req: IRequest, res: Response, next: NextFunction) => {
      const secondaryUserId = new Types.ObjectId(req.params.secondaryUserId);
      req.context.secondaryUserId = secondaryUserId;
      next();
    }
  );

  router.get("/", controller.fetchCustomers);
  router.post("/", controller.saveCustomer);
  router.put("/:secondaryUserId", controller.editOne);
  router.delete("/:secondaryUserId", controller.deleteOne);
  return router;
};
