import { authenticationController } from '../controllers/authenticationController';
import { Router } from 'express';

export const authenticationRouter = (): Router => {
  const router = Router();
  const controller = authenticationController();

  router.post('/login', controller.login);
  router.post('/register', controller.register);
  router.post('/forgotpassword', controller.forgotPassword);
  router.put('/resetpassword/:resetToken', controller.resetPassword);

  return router;
};
