import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../interfaces";
import data from '../../data/users.json';

export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
) {
    const { query } = req;
    const id = query.id;

    const userProfile = data.find(user => user.id === id) || {
        id: '',
        name: '',
        gender: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        about: '',
        registered: '',
        friends: []
    };

    res.status(200).json(userProfile);

}