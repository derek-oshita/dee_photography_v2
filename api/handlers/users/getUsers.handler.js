const { usersAbstract } = require('../../abstract/users.abstract');
const { usersDB } = require('../../database/queries/users');

module.exports = async (req, res) => {
  try {
    const users = await usersDB.getUsers();
    return res.status(200).json(usersAbstract.many(users));
  } catch (err) {
    throw new Error(err);
  }
};
