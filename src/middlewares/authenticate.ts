import { NextFunction, Response } from "express";
import { User } from "../data/models";
import { IRequest } from "../commons/types";
import { setDefaultProjectForUser } from "../utilities";

const jwt = require("jsonwebtoken");


export const authenticate = async (req:IRequest, res: Response, next: NextFunction) => {
  try {
      if(!req.headers.authorization) return res.status(401).send("Not authorized, missing header")

        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET, {
            complete: true,
        });
        const id = decodedToken.payload.user;
        const user = await User.findById(id).populate('currentProject');
        if (user) {
            req.context.token = token;
            req.context.user = user;
            if(!user.currentProject?._id) await setDefaultProjectForUser(user); 
            req.context.currentProject = user.currentProject;
            next();
        } else {
            console.log("no user");
            throw new Error("No user");
        }
  } catch (error) {
    error.route = "Auth";
    next(error);
  }
};

