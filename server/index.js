const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');

const create_user = require('./create_user');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(pino);

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
module.exports = app;

create_user();