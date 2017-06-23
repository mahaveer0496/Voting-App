const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const session = require('express-session');
const config = require('./config');
const path = require('path');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(express.static(path.resolve(`${__dirname}./../dist`)));
  app.use(cors());
  app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: false,
  }));
  app.use(passport.initialize());
  app.use(passport.session());
};
