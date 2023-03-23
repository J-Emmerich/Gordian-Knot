import { Types } from "mongoose"
import { IRole } from "@commons/types";

export const isRoleInBothArrays = (fthArr: IRole[], secArr: IRole[]) : Boolean => {

    let answer = false;

    console.log(fthArr);

    console.log("*****************************************************************")
    console.log("*****************************************************************")
    console.log(secArr)
    for (let i=0; i < fthArr.length; i++){
if(secArr.some(role => role._id?.toString() === fthArr[i]._id?.toString())){
    answer = true;
    break
}
    }
    return answer
}

