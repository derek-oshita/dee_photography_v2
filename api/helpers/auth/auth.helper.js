const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { config } = require('../../config');

/**
 * For hashing a password to store in the database
 */
const hashPassword = (pw) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(pw, salt);
  return hash;
};

/**
 * For comparing the hashed value of the password in the request to the
 * hash stored in the database.
 */
const compareHash = (pw, dbHash) => {
  return bcrypt.compareSync(pw, dbHash);
};

/**
 * Middleware that verifies the JWT for protected resources.
 */
const authRequired = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }

  try {
    // Verify the token
    const decoded = await jwt.verify(token, config.TOKEN_KEY);

    console.log('decoded', decoded);

    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
};

module.exports = {
  hashPassword,
  compareHash,
  authRequired,
};
