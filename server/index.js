const express = require('express');
const app = express();
const { log } = require('./startup/logger');

require('./startup/errorHandler')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  log.info(`Listening on port ${port}`);
});

module.exports = server;
