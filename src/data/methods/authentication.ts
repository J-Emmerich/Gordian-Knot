import { Types } from "mongoose";
import { User } from "@models";
import {setDefaultProjectForUser} from '@utilities';
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_EXPIRE} = process.env;


export const registerUser = async (name : string, password: string, email:string) => {
    if (password.length < 3) {
      throw new Error("invalid password"); 
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const user = new User({ name, passwordHash, email });
    await user.save(); 
    const payload = {
      user: user._id,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE });
    return { user: user._id, token };
  };
  
 export const loginUser = async (name : string, password: string) => {

    const user = await User.findOne({name: name}).select("+passwordHash");
    if (!user) throw new Error("Invalid credentials");
    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordCorrect) throw new Error("Invalid Credentials");
    if (!user.currentProject?._id) await setDefaultProjectForUser(user);
    const payload = {
      user: user._id,
    };
  
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE });
    return {
      user: user._id,
      token,
    };
  };