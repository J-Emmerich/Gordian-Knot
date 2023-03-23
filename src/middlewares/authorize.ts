import { NextFunction } from "express";
import {Types, HydratedDocument} from 'mongoose';
import { User, Role, Project } from "@models";
import { IUser, IRole } from "@commons/types";
import {  ERole, EPermission, EResource } from "@commons/enumerators"; 
import { filterRolePermissionsByHTTPMethod, isRoleInBothArrays } from "@utilities";

export const authorize = async (req: any, res: any, next: NextFunction) => {

 
    const user : HydratedDocument<IUser> | null | undefined = await req.context.user.populate({path:'roles', populate: ['resources', 'permissions']});
    // Check if user was found and has roles
    if (!user || user === undefined) return res.status(401).send('Access denied. User not found.');
    if(!user.populated('roles')) return res.status(401).send('Access denied. Cant populate role');
    
let hasPermission : Boolean = false;
const testArr = req.context.availableRoles
req.context.availableRoles = req.context.availableRoles.map((availableRole : IRole) => {
            console.log(req.method)
            console.log(availableRole.permissions); 
         return   filterRolePermissionsByHTTPMethod(availableRole, req.method)
});
console.log('*^****************')
console.log(testArr, "this test")
console.log(req.context.availableRoles); 

console.log('*^****************')
if (!req.context.availableRoles.length) return res.status(403).send(`Access denied. No permissions set for this`)
// check if the user has the permission to READ the resource
 hasPermission = isRoleInBothArrays(req.context.availableRoles, user.roles as IRole[]);
    if (!hasPermission) return res.status(403).send(`Access denied. Not your role`);
    next();
  };

   