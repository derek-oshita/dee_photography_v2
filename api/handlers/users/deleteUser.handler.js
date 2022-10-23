const { usersDB } = require('../../database/queries/users');

module.exports = async (req, res) => {
  try {
    const userID = req.params.id;

    const user = await usersDB.destroyUser(userID);

    return res.status(200).send(`User deleted with ID: ${user.id}`);
  } catch (err) {
    throw new Error(err);
  }
};
