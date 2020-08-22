const express = require('express');

const auth = require('../routes/auth');
const users = require('../routes/users');
const notifications = require('../routes/notifications');
const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/notifications', notifications);
  app.use(error);
};
