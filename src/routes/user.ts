import { authorize, context } from '@middlewares';
import { userController } from '../controllers/userController';
import { Router } from 'express';

export const userRouter = (): Router => {
  const router = Router();
  const controller = userController();

  router.all('*', context, authorize);
  router.put('/current', controller.updateCurrentProject);

  return router;
};
