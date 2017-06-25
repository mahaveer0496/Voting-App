const express = require('express');
const passport = require('passport');
const User = require('./../models/UserModel');

const userRoutes = express.Router();

userRoutes.route('/')
  .get((req, res) => {
    User.find({}).populate('polls').exec((error, user) => {
      if (error) return res.send(error);
      return res.send(user);
    });
  });
userRoutes.route('/checkAuth')
  .get((req, res) => {
    if (req.user) return res.json({ email: req.user.email });
    return res.json({ email: '' });
  });

userRoutes.route('/register')
  .post((req, res, next) => {
    passport.authenticate('local-register', (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.send(info);
      req.logIn(user, (error) => {
        if (error) { return next(error); }
        return res.json({ email: user.email });
      });
    })(req, res, next);
  });


userRoutes.route('/login')
.post((req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    // console.log(user);
    if (err) return res.send(err);
    if (!user) return res.send(info);
    req.logIn(user, (error) => {
      if (error) return res.send(error);
      return res.json({ email: user.email });
    });
  })(req, res, next);
});

userRoutes.route('/secret')
  .get((req, res, next) => {
    if (req.isAuthenticated()) return next();
    return res.send('unauthenticated');
  }, (req, res) => {
    res.send('shhhh! this is secret page');
  });


userRoutes.route('/logout')
  .get((req, res) => {
    req.logOut();
    res.send('logged you out!');
  });

module.exports = userRoutes;
