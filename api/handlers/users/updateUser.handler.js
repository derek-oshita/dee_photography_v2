const { usersAbstract } = require('../../abstract/users.abstract');
const { usersDB } = require('../../database/queries/users');

module.exports = async (req, res) => {
  try {
    const userID = req.params.id;

    const user = await usersDB.updateUser(userID, req.body);

    return res.status(200).json(usersAbstract.one(user));
  } catch (err) {
    throw new Error(err);
  }
};
