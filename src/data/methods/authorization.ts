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
    {name: 'Invoice'},
    {name: 'Client'}
];

export const roles: IRole[] = [
    {name: 'Admin', resources: resources, permissions: permissions},
    {name: 'User', resources: resources, permissions: [permissions[0], permissions[1], permissions[2]]},
    {name: 'InvAdmin', resources: [resources[0]], permissions: permissions},
    {name: 'ClientAdmin', resources: [resources[1]], permissions: permissions},
    {name: 'InvUser', resources: [resources[0]], permissions: [permissions[0], permissions[1]] },
    {name: 'ClientUser', resources: [resources[1]], permissions: [permissions[0], permissions[1], permissions[2]]}
]

const findRoleAndSave:Function = async (role: IRole) => {
    {
      const resources: HydratedDocument<IResource>[] | null[] = await mapResources(role);
      const permissions : HydratedDocument<IPermission>[] | null[]= await mapPermissions(role);
  if(resources[0] && permissions[0]){

    const newRole: HydratedDocument<IRole> = new Role({
      name: role.name,
      resources: resources,
      permissions: permissions     
    })
    
    newRole.save((e)=>{
      console.log(e)
    });
  } else console.log("A role must have resource and permission defined");

  }
}

export const createRolesAndPermissionsAndResources = async () => {
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
          const existingResource: IResource | null = await Resource.findOne({name: resource.name})
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
  function mapResources(role: IRole) : Promise<any> {
    return Promise.all(role.resources.map(async (resource : IPermission) : Promise<IResource | null>   => {
      
        return await Resource.findOne({name: resource.name})}))
      
  }
  function mapPermissions(role : IRole) :  Promise<any> {
    return Promise.all(role.permissions.map(async (permission : IPermission) : Promise<IPermission | null> => {
      
      return await Permission.findOne({name: permission.name })}))
  }