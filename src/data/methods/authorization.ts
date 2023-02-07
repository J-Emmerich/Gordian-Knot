import * as types from "../../commons/types";

import { Role, Permission, Resource } from '../models';

// Create the roles and permissions in the database


 const permissions: types.Permission[] = [
   { name: 'create', description: 'create resource'},
   { name: 'read', description: 'Read a resource' },
   { name: 'update', description: 'Update a resource' },
   { name: 'delete', description: 'Delete a resource' }
]

 const resources: types.Resource[] = [
    {resourceId: 'Invoice'},
    {resourceId: 'Client'}
];

 const roles: types.IRole[] = [
    {name: 'Admin', resources: resources, permissions: permissions},
    {name: 'User', resources: resources, permissions: [permissions[0], permissions[1], permissions[2]]},
    {name: 'InvAdmin', resources: [resources[0]], permissions: permissions},
    {name: 'ClientAdmin', resources: [resources[1]], permissions: permissions},
    {name: 'InvUser', resources: [resources[0]], permissions: [permissions[0], permissions[1]] },
    {name: 'ClientUser', resources: [resources[1]], permissions: [permissions[0], permissions[1], permissions[2]]}
]

const findRoleAndSave:Function = (role: types.IRole, i: number) => {
    {
        console.log(`find role and save ${i}`);
        i++;
      const newRole = new Role({
        name: role.name,
        resources: role.resources.map(resource  => {
            return Resource.find({resourceId: resource.resourceId})
        }),
        permissions: role.permissions.map(permission => {
          return Permission.find({ name: permission.name });
        })
      });

      newRole.save((e:any)=>console.log(e?.message));
    }
}

export const createRolesAndPermissions = async () => {
 try {
    for (const permission of permissions) {
        const existingPermission = await Permission.find({ name: permission.name });
        if (!existingPermission) {
          const newPermission = new Permission(permission);
          newPermission.save((err) => {
                console.log(err?.message);
            });
        }
      }
    
      for (const resource of resources) {
          const existingResource = await Resource.find({resourceId: resource.resourceId})
          if(!existingResource) {
  const newResource = new Resource(resource);
  newResource.save((err) => {
                  console.log(err?.message);
              });
          }
      }
  

      for (const role of roles) {
        let i = 1;
        console.log(i, "first shit");

        let existingRole = await Role.find({ name: role.name });
        
        if (!existingRole|| existingRole[0]===null || existingRole[0]===undefined){
            findRoleAndSave(role, i);
        } 
        
       
      }
 } catch (error) {
    console.log(error)
 }
   


  };