const { connectionPool } = require('./pool/connectionPool');

class Todos {
  // Get all todos by userID
  getTodos = (userID) => {
    return new Promise((resolve, reject) => {
      connectionPool.query(
        'SELECT * FROM todos WHERE user_id = $1 ORDER BY id',
        [userID],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.rows);
        },
      );
    });
  };

  // Get a todo by ID
  getTodoByID = (todoID) => {
    return new Promise((resolve, reject) => {
      connectionPool.query(
        'SELECT * FROM todos WHERE id = $1',
        [todoID],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.rows[0]);
        },
      );
    });
  };

  // Create todo
  createTodo = (payload) => {
    const { title, body, dueDate, isFavorite, userID } = payload;

    return new Promise((resolve, reject) => {
      connectionPool.query(
        'INSERT INTO todos (title, body, due_date, is_favorite, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [title, body, dueDate, isFavorite, userID],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.rows[0]);
        },
      );
    });
  };

  // Update todo
  updateTodo = (todoID, payload) => {
    const { title, body, dueDate, isComplete, isFavorite } = payload;

    return new Promise((resolve, reject) => {
      connectionPool.query(
        'UPDATE todos SET title = $1, body = $2, due_date = $3, is_complete = $4, is_favorite = $5 WHERE id = $6 RETURNING *',
        [title, body, dueDate, isComplete, isFavorite, todoID],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.rows[0]);
        },
      );
    });
  };

  // Delete todo
  destroyTodo = (todoID) => {
    return new Promise((resolve, reject) => {
      connectionPool.query(
        'DELETE FROM todos WHERE id = $1 RETURNING *',
        [todoID],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.rows[0]);
        },
      );
    });
  };
}

module.exports.todosDB = new Todos();
