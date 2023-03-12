import * as express from 'express';
import { context } from '../middlewares/context';
import {authenticationController} from '../controllers/authenticationController';

export const authenticationRouter = () => {
    const router = express.Router();
    const controller = authenticationController();
  // router.all('*', context);

    router.get('/login', controller.login)
    router.post('/register', controller.register);

    return router;
  };
  
  