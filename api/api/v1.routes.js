const express = require('express');
const { usersDB } = require('../database/queries/users');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('TAKE THE RED PILL...');
});

// User Routes
router.get('/users', require('../handlers/users/getUsers.handler'));
router.post('/users', require('../handlers/users/createUser.handler'));
router.get('/users/:id', require('../handlers/users/getUserByID.handler'));
router.put('/users/:id', require('../handlers/users/updateUser.handler'));
router.delete('/users/:id', require('../handlers/users/deleteUser.handler'));

module.exports = router;
