const { usersDB } = require('../../database/queries/users');
const { hashPassword } = require('../../helpers/auth/auth.helper');

module.exports = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check for an empty registration payload
    if (!email || !password) {
      throw new Error('Please submit a valid email and password!');
    }

    const existingUser = await usersDB.getUserByEmailAddress(email);

    // Check to see if a user with that email address already exists
    if (existingUser) {
      throw new Error('A user with this email address already exists!');
    }

    const hashedPassword = hashPassword(password);
    const newUser = await usersDB.createUser(email, hashedPassword, name);

    return res.status(201).json(newUser);
  } catch (err) {
    throw new Error(err);
  }
};
