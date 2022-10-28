const { todosDB } = require('../../database/queries/todos');

module.exports = async (req, res) => {
  try {
    const newTodo = await todosDB.createTodo(req.body);
    return res.status(201).json(newTodo);
  } catch (err) {
    throw new Error(err);
  }
};
