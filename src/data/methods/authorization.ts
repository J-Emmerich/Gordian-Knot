import { HydratedDocument, Types } from "mongoose";
import {IPermission, IRole, IResource} from "@commons/types";

import { Role} from '@models';

// Create the roles and permissions in the database


 const permissions: IPermission[] = [
   { name: 'CREATE'},
   { name: 'READ'},
   { name: 'UPDATE'},
   { name: 'DELETE'}
]

 const resources: IResource[] = [
    {name: 'Invoice'},
    {name: 'Client'},
    {name: 'User'},
    {name: 'Project'}
];

export const roles: IRole[] = [
    {name: 'Admin', resources: resources, permissions: permissions},
    {name: 'User', resources: resources, permissions: [permissions[0], permissions[1], permissions[2]]},
]

const findRoleAndSave:Function = async (role: IRole) => {
    {
     
 

    const newRole: HydratedDocument<IRole> = new Role({
      name: role.name,
      resources: role.resources,
      permissions: role.permissions     
    })
    
    newRole.save((e)=>{
      console.log(e)
    });
  } 
}

export const createRolesAndPermissionsAndResources = async () => {
 try {
   

      for (const role of roles) {
           let existingRole: HydratedDocument<IRole> | null= await Role.findOne({ name: role.name });
        
        if (!existingRole){
            findRoleAndSave(role);
        } 
        
       
      }
 } catch (error) {
    console.log(error)
 }
   


  };
