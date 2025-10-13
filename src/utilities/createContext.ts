import { NextFunction, Response } from 'express';
import { IRequest } from '@commons/types';

export const createContext = (req: IRequest, _res: Response, next: NextFunction): void => {
  req.context = {};
  next();
};
