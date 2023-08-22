const User = require('../models/user');

const createUser = async (req, res) => {
  const { email } = req.body;
  const isUserExists = await User.findOne(email);

  if (!isUserExists) {
      const { firstname, lastname, password } = req.body;
      const newUser = User.create(req.body);
      res.json(newUser);
  } else {
      res.json({
          message: 'User already exists',
          success: false,
      });
  }
};

module.exports = { createUser }
