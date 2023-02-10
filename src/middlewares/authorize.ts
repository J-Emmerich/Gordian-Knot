import { NextFunction } from "express";
import {Types, HydratedDocument} from 'mongoose';
import { findUserByName } from "../data/methods/users";
import { User } from "../data/models";
import { IUser, IRole } from "../commons/types";

export const authorize = async (req: any, res: any, next: NextFunction) => {

  console.log(`this is the id received ${req.params.id}`)
    const id = new Types.ObjectId(req.params.id);
    console.log(`this is the id ${id}`)
    const user : HydratedDocument<IUser> | null | undefined = await User.findById(id).populate({path:'role', populate: ['permissions','resources']});
    if (!user || user === undefined) return res.status(401).send('Access denied. User not found.');
    if(!user.populated('role')) return res.status(401).send('Access denied. No permission');
  req.route.requiredPermission = "read"; 

    const role: [IRole] = user.role;
   console.log(user)
   console.log(role)
   console.log(role[0].permissions)
   console.log(role[0].resources)
    const requiredPermission = req.route.requiredPermission;
    // const requiredResource = req.route.requiredResource; 
    const hasPermission = role[0].permissions.find(permission => 
      {
        return permission.name === requiredPermission});
   
    if (!hasPermission) return res.status(403).send(`Access denied. ${role[0].name} role does not have the ${requiredPermission} permission.`);
  
    next();
  };
