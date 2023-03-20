const jwt = require('jsonwebtoken');

const { usersDB } = require('../../database/queries/users');
const { compareHash } = require('../../helpers/auth/auth.helper');
const { config } = require('../../config');
const { LoginError } = require('./loginErrors/login.error')

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new LoginError('Email address field can not be empty!')
    }    
    
    if (!password) {
      throw new LoginError('Password field can not be empty!')
    }
    
    // Get user object from the database by email address
    const user = await usersDB.getUserByEmailAddress(email);

    if (!user) {
      throw new LoginError('No email address found!')
    }
    
    // Compare the hash generated by request passwod and compare to the database hash
    const isValidPassord = compareHash(password, user.password);
    
    if (!isValidPassord) {
      throw new LoginError('The email address or password is invalid!')
    }

    // If the password is valid, sign the token, then pass it in the response along with user data
    const currentUser = { userID: user.id };
    const jwtSecret = config.JWT_SECRET;
    const jwtExpiration = { expiresIn: '1 days' };
    const token = await jwt.sign(currentUser, jwtSecret, jwtExpiration);

    res.status(200).json({ token, userID: user.id });
  } catch (err) {
    res.statusMessage = err.message;
    res.statusCode = err.statusCode;
    res.send()
  }
};
