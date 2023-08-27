import {Request, Response} from "express";
import asyncHandler from "express-async-handler";

const User = require('../models/user');

const createUser = asyncHandler(async (req: Request, res: Response) => {
    const email = req.body.email;
    const isUserExists = await User.findOne({ email });

    if (!isUserExists) {
        const { firstname, lastname, password } = req.body;
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error('User Already Exists');
    }
});

module.exports = { createUser }
