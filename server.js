const express = require('express');
const jwt = require('jsonwebtoken');

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');

const server = express();

server.use(express.json());

server.use('/api/', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send("Try /api something something bro");
});


module.exports = server;