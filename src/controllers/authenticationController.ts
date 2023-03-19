import { NextFunction, Response } from "express";
import { IRequest } from "@commons/types"
import { loginUser, registerUser } from "@dbmethods/authentication";

export const authenticationController = () => {
    const login = async (req: IRequest, res: Response, next : NextFunction) => {
      try {
        const { name, password } = req.body;
        const user = await loginUser(name, password);
        res.status(200).json({ success: true, data: user });
      } catch (err) {
        next(err);
      }
    };
  
    const register = async (req: IRequest, res: Response, next : NextFunction) => {
      try {
        console.log("1")
        const { name, password, email } = req.body;
        const user = await registerUser(name, password, email);
        res.status(200).json({ success: true, data: user });
      } catch (err) {
        next(err);
      }
    };

    return { login, register};
};