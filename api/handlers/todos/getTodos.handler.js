const { todosDB } = require('../../database/queries/todos');

module.exports = async (req, res) => {
  try {
    const { userID } = req.query;
    const todos = await todosDB.getTodos(userID);

    return res.status(200).json(todos);
  } catch (err) {
    throw new Error(err);
  }
};
