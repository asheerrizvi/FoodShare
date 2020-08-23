const express = require('express');

const auth = require('../routes/auth');
const users = require('../routes/users');
const foods = require('../routes/foods');
const notifications = require('../routes/notifications');
const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/notifications', notifications);
  app.use('/api/foods', foods);

  app.use(error);
};
