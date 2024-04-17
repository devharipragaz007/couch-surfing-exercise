import type { NextApiRequest, NextApiResponse } from "next";
import { UserResponse } from "../../interfaces";
import data from '../data/users.json';


export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<UserResponse[]>
) {
    let resData: UserResponse[] = data.map(item => {
          return {id : item.id, name : item.name} 
        });
    res.status(200).json(resData);
}