const { connectionPool } = require('./pool/connectionPool');

class Users {
  // Get all users
  getUsers = () => {
    return new Promise((resolve, reject) => {
      connectionPool.query('SELECT * FROM users', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data.rows);
      });
    });
  };

  // Get a user by ID
  getUserByID = (userID) => {
    return new Promise((resolve, reject) => {
      connectionPool.query(
        'SELECT * FROM users WHERE id = $1',
        [userID],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.rows[0]);
        },
      );
    });
  };

  // Get a user by email address
  getUserByEmailAddress = (userEmailAddress) => {
    return new Promise((resolve, reject) => {
      connectionPool.query(
        'SELECT * FROM users WHERE email = $1',
        [userEmailAddress],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.rows[0]);
        },
      );
    });
  };

  // Create user
  createUser = (email, password) => {
    return new Promise((resolve, reject) => {
      connectionPool.query(
        'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
        [email, password],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.rows[0]);
        },
      );
    });
  };

  // Update user
  updateUser = (userID, body) => {
    const { email, password, name } = body;

    return new Promise((resolve, reject) => {
      connectionPool.query(
        'UPDATE users SET email = $1, password = $2, name = $3 WHERE id = $4 RETURNING *',
        [email, password, name, userID],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.rows[0]);
        },
      );
    });
  };

  // Delete User
  destroyUser = (userID) => {
    return new Promise((resolve, reject) => {
      connectionPool.query(
        'DELETE FROM users WHERE id = $1 RETURNING *',
        [userID],
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

module.exports.usersDB = new Users();
