import { NextFunction } from "express";
import {Types, HydratedDocument} from 'mongoose';
import { User, Role, Project } from "@models";
import { IUser, IRole, ERole, EPermision, EResource } from "@commons/types";
import { isRoleInBothArrays, filterReadPermission, filterClientResource,filterCreatePermission, filterDeletePermission, filterUpdatePermission } from "../utilities";

export const authorize = async (req: any, res: any, next: NextFunction) => {

 
    const user : HydratedDocument<IUser> | null | undefined = await req.context.user.populate({path:'role', populate: ['resources', 'permissions']});
    // Check if user was found and has roles
    if (!user || user === undefined) return res.status(401).send('Access denied. User not found.');
    if(!user.populated('role')) return res.status(401).send('Access denied. Cant populate role');

    
let hasPermission : Boolean = false;



switch(req.method){
  case ("GET"):
      // filter roles that have the READ permission
      req.context.availableRoles  = req.context.availableRoles.filter(filterReadPermission);
break; 
case ("POST"):
      // filter roles that have the CREATE permission
      req.context.availableRoles = req.context.availableRoles.filter(filterCreatePermission);
break;
    case ("PUT"): 
      // filter roles that have the UPDATE permission

      req.context.availableRoles = req.context.availableRoles.filter(filterUpdatePermission);
break;
case("DELETE"):
      // filter roles that have the DELETE permission

      req.context.availableRoles = req.context.availableRoles.filter(filterDeletePermission);
break;
default: 
return res.status(401).send(`Access denied. Switch`);
  }

if (!req.context.availableRoles.length) return res.status(403).send(`Access denied. No permissions set for this`)
// check if the user has the permission to READ the resource
 hasPermission = isRoleInBothArrays(req.context.availableRoles, user.role as IRole[]);
    if (!hasPermission) return res.status(403).send(`Access denied. Not your role`);
    next();
  };

   