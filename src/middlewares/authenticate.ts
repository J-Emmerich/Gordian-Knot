import { NextFunction, Response } from 'express';
import { User } from '@models';
import { IPayload, IProject, IRequest } from '@commons/types';
import { setDefaultProjectForUser } from '@utilities';
import { HydratedDocument, Types } from 'mongoose';

import jwt, { JwtPayload } from 'jsonwebtoken';

export const authenticate = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    if (!req.headers.authorization) return res.status(401).send('Not authorized, missing header');

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET, {
      complete: true,
    });
    const payLoad: IPayload = decodedToken.payload as JwtPayload;
    if (!payLoad.user) throw new Error('No user');

    const id: Types.ObjectId = new Types.ObjectId(payLoad.user);

    const user = await User.findById(id).populate('currentProject');
    if (user) {
      req.context.token = token;
      req.context.user = user;
      if (!user.currentProject?._id) await setDefaultProjectForUser(user);
      req.context.currentProject = user.currentProject as HydratedDocument<IProject>;
      next();
    } else {
      throw new Error('No user');
    }
  } catch (error) {
    const route = 'Auth';
    const err = { error, route };
    next(err);
  }
};
