import {Request, Response} from "express";

const User = require('../models/user');

const createUser = async (req: Request, res: Response) => {
  const email = req.body.email;
  const isUserExists = await User.findOne({ email });

  if (!isUserExists) {
      const { firstname, lastname, password } = req.body;
      const newUser = await User.create(req.body);
      res.json(newUser);
  } else {
      res.json({
          message: 'User already exists',
          success: false,
      });
  }
};

module.exports = { createUser }
