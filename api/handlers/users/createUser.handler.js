const { usersDB } = require('../../database/queries/users');
const { hashPassword } = require('../../helpers/auth/hashPasswod.helper');

module.exports = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      throw new Error('Please submit a valid email and password');
    }

    const hashedPassword = hashPassword(password);
    const newUser = await usersDB.createUser(email, hashedPassword, name);

    return res.status(201).json(newUser);
  } catch (err) {
    throw new Error(err);
  }
};
