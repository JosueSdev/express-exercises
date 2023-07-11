const express = require('express');
const logger = require('morgan');

const mainRouter = require('./controller/index');

const app = express();

// middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', mainRouter);

// 404
app.use(function(_req, _res, next) {
  const error = new Error();
  error.status = 404;

  next(error);
});

// error handler
app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});

module.exports = app;
