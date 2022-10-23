const { usersDB } = require('../../database/queries/users');

module.exports = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      throw new Error('Please submit a valid email and password');
    }

    const newUser = await usersDB.createUser(email, password, name);

    return res.status(201).json(newUser);
  } catch (err) {
    throw new Error(err);
  }
};
