import { Project } from "../data/models"
import { Types } from "mongoose";
export const createDummyProject = async () => {

    const role1 = new Types.ObjectId("63f27ceecb4a130310677263");
    const role2 = new Types.ObjectId("63f27ceecb4a13031067726d");
    const user1 = new Types.ObjectId("63e6bc495c80c9e52d9f7153");

const newProject = new Project({name: "Dummy", users: [user1], roles: [role1, role2], })
await newProject.save()
}