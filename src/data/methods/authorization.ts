import { HydratedDocument, Types } from "mongoose";
import {IPermission, IRole, IResource} from "../../commons/types";

import { Role, Permission, Resource } from '../models';

// Create the roles and permissions in the database


 const permissions: IPermission[] = [
   { name: 'create', description: 'create resource'},
   { name: 'read', description: 'Read a resource' },
   { name: 'update', description: 'Update a resource' },
   { name: 'delete', description: 'Delete a resource' }
]

 const resources: IResource[] = [
    {resourceId: 'Invoice'},
    {resourceId: 'Client'}
];

 const roles: IRole[] = [
    {name: 'Admin', resources: resources, permissions: permissions},
    {name: 'User', resources: resources, permissions: [permissions[0], permissions[1], permissions[2]]},
    {name: 'InvAdmin', resources: [resources[0]], permissions: permissions},
    {name: 'ClientAdmin', resources: [resources[1]], permissions: permissions},
    {name: 'InvUser', resources: [resources[0]], permissions: [permissions[0], permissions[1]] },
    {name: 'ClientUser', resources: [resources[1]], permissions: [permissions[0], permissions[1], permissions[2]]}
]

const findRoleAndSave:Function = async (role: IRole) => {
    {
      // This must be an Promise.all otherwise it won´t wait the function
      const resources = await mapResources(role);
      const permissions = await mapPermissions(role);
    console.log(permissions, resources); 
        const newRole: HydratedDocument<IRole> = new Role({
        name: role.name,
        resources: resources,
        permissions: permissions     
        })
  
 newRole.save((e)=>{
  console.log(e)
 });

  }
}

export const createRolesAndPermissions = async () => {
 try {
    for (const permission of permissions) {
        const existingPermission: IPermission | null = await Permission.findOne({ name: permission.name });
        if (!existingPermission) {
          const newPermission: HydratedDocument<IPermission> = new Permission(permission);
          newPermission.save((err) => {
                console.log(err?.message);
            });
        }
      }
    
      for (const resource of resources) {
          const existingResource: IResource | null = await Resource.findOne({resourceId: resource.resourceId})
          if(!existingResource) {
  const newResource: HydratedDocument<IResource> = new Resource(resource);
  newResource.save((err) => {
                  console.log(err?.message);
              });
          }
      }
  

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



  // This function will return an array of resolved promises
  // It needs to await to db find the result
  // once thats done it will be put in another Promise.All
  function mapResources(role: IRole){
    return Promise.all(role.resources.map(async resource  => {
      return await Resource.findOne({resourceId: resource.resourceId})}))
  }
  function mapPermissions(role : IRole){
    return Promise.all(role.permissions.map(async permission  => {
      return await Permission.findOne({name: permission.name})}))
  }