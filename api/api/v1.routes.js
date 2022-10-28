const express = require('express');
const { usersDB } = require('../database/queries/users');

const router = express.Router();
const originalURL = process.env.LOCAL_API_URL;

router.get('/', (req, res) => {
  res.send('TAKE THE RED PILL...');
});

// Auth Routes
router.post('/auth/register', require('../handlers/auth/register.handler'));
router.post('/auth/login', require('../handlers/auth/login.handler'));

// User Routes
router.get('/users', require('../handlers/users/getUsers.handler'));
router.get('/users/:id', require('../handlers/users/getUserByID.handler'));
router.put('/users/:id', require('../handlers/users/updateUser.handler'));
router.delete('/users/:id', require('../handlers/users/deleteUser.handler'));

module.exports = router;
