import { NextFunction, Response, RequestHandler } from 'express';
import { IAuthControllerReturn, IRequest } from '@commons/types';
import {
  loginUser,
  registerUser,
  resetUserPassword,
  userForgotPassword,
} from '@dbmethods/authentication';
import { logger } from '@utilities';

export const authenticationController = (): IAuthControllerReturn => {
  const login: RequestHandler = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      logger.trace({where: 'Login', data: req.body});
      const { email, password } = req.body;
      const user = await loginUser(email, password);
      res.status(200).json({ success: true, data: user });
    } catch (err) {
      next(err);
    }
  };

  const register: RequestHandler = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      logger.trace({where: 'Login', data: req.body});
      const { username, password, email } = req.body;
      const user = await registerUser(username, password, email);
      res.status(200).json({ success: true, data: user });
    } catch (err) {
      logger.error(err, "RegisterRoute");
      next(err);
    }
  };
  const forgotPassword: RequestHandler = async (
    req: IRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { email } = req.body;
      await userForgotPassword(email);
      res.status(200).json({ success: true, data: 'Email Sent' });
    } catch (err) {
      logger.error(err, 'forgotPassword');

      next(err);
    }
  };

  const resetPassword: RequestHandler = async (
    req: IRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { resetToken } = req.params;
      const { password } = req.body;
      await resetUserPassword(resetToken, password);
      res.status(200).json({
        succes: true,
        data: 'Password reset',
      });
    } catch (err) {
      logger.error(err, 'resetPassword');

      next(err);
    }
  };

  return {
    login,
    register,
    forgotPassword,
    resetPassword,
  };
};
