const { usersAbstract } = require('../../abstract/users.abstract');
const { usersDB } = require('../../database/queries/users');
const { authRequired } = require('../../helpers/auth/auth.helper');

module.exports = async (req, res) => {
  try {
    // Validate request
    await authRequired(req, res);

    // Get the user ID
    const userID = req.params.id;
    const user = await usersDB.getUserByID(userID);

    return res.status(200).json(usersAbstract.one(user));
  } catch (err) {
    throw new Error(err);
  }
};
