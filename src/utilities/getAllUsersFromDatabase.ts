import { IUser } from "../commons/types"
import { User } from "../data/models"

export const getAllUsersFromDatabase = async () : Promise<IUser[] | null[]>=> {
 const allUsers : IUser[] = await User.find({}); 
 return allUsers; 
}