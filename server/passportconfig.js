const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('./models/UserModel');

module.exports = (passport) => {
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, (email, password, done) => {
    User.findOne({ email }).then((user) => {
      if (!user) return done(null, false, { message: 'Wrong email' });
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) return done(err);
        if (!res) return done(null, false, { message: 'wrong password' });
        return done(null, user, { message: 'Login success' });
      });
    })
    .catch(err => done(err));
  }));

  passport.use('local-register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, (email, password, done) => {
    bcrypt.hash(password, 10, (err, hash) => {
      User.create({ email, password: hash })
      .then(user => done(null, user, { message: 'Registration success' }))
      .catch(err => done(null, false, { message: 'User already exists' }));
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      done(null, user);
    }, err => done(err));
  });
};
