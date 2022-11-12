const { usersDB } = require('../../database/queries/users');
const { hashPassword } = require('../../helpers/auth/auth.helper');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for an empty registration payload
    if (!email || !password) {
      res.statusMessage = 'Please submit a valid email and password!';
      return res.status(400).end();
    }

    // Check to see if a user with that email address already exists
    const existingUser = await usersDB.getUserByEmailAddress(
      email.toLowerCase(),
    );

    if (existingUser) {
      res.statusMessage = 'A user with this email address already exists!';
      return res.status(400).end();
    }

    // Hash the password and create a user record
    const hashedPassword = hashPassword(password);
    const newUser = await usersDB.createUser(email, hashedPassword);

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};
