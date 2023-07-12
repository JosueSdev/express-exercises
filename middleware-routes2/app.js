const express = require('express');
const logger = require('morgan');
const session = require('express-session')

const mainRouter = require('./controller/index');

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(session({
  cookie: {
    maxAge: 60000,
  },
  resave: false,
  saveUninitialized: false,
  secret: 'stuff',
}));

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
