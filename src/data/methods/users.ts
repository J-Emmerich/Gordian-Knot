import { IUser,IRole } from "../../commons/types";
import { Role, User } from "../models";

//needed to access the mongoose methods
import {HydratedDocument} from 'mongoose'; 

export const createUser: Function = async (name: string) => {
try {
    
    const newUser: HydratedDocument<IUser> = await User.create({name: name});
    newUser.save(e =>console.log(e?.message))
    const findUserById = await User.findById(newUser._id);
    console.log("this is not hanging", findUserById?.name);
} catch (error) {
    console.log( error.message);
}

}

export const findUserById : Function =async (name:string) => {
    try {
        const foundUser: IUser | null = await User.findOne({name: name});

        if(foundUser) {
          if(foundUser?.role){
              const role: IRole | null = await Role.findById(foundUser.role._id)
              console.log(role, "this is the role");
          } else console.log("User has no role attached")
                }
                else console.log(`User not found`);
    } catch (error) {
        console.log(error)
    }
}