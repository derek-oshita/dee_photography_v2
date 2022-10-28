const { todosDB } = require('../../database/queries/todos');

module.exports = async (req, res) => {
  try {
    console.log('handler');

    const todoID = req.params.id;
    console.log(todoID);
    const todo = await todosDB.getTodoByID(todoID);
    console.log(todo);

    return res.status(201).json(todo);
  } catch (err) {
    throw new Error(err);
  }
};
