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

const authRequired = async (req, res) => {
  // Extract the token from the authorization header and remove "Bearer" from string.
  const requestToken = (
    req.headers.authorization || req.headers['x-access-token']
  ).replace(/^Bearer\s+/, '');

  if (!requestToken) {
    return res.status(403).send('A token is required for authentication');
  }

  try {
    // Verify the token
    if (requestToken) {
      await jwt.verify(requestToken, config.JWT_SECRET, (err, decoded) => {
        if (err) {
          throw new Error(err);
        }
        req.decoded = decoded;
      });
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  hashPassword,
  compareHash,
  authRequired,
};
