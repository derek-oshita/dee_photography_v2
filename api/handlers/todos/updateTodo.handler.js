const { todosDB } = require('../../database/queries/todos');

module.exports = async (req, res) => {
  try {
    const todoID = req.params.id;
    const updatedTodo = await todosDB.updateTodo(todoID, req.body);

    return res.status(200).json(updatedTodo);
  } catch (err) {
    throw new Error(err);
  }
};
