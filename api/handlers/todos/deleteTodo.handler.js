const { todosDB } = require('../../database/queries/todos');

module.exports = async (req, res) => {
  try {
    const todoID = req.params.id;
    const deletedTodo = await todosDB.destroyTodo(todoID);

    return res.status(200).json(deletedTodo);
  } catch (err) {
    throw new Error(err);
  }
};
