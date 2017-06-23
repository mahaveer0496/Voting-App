const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// routes---
const pollRoutes = require('./routes/pollRoutes');
const userRoutes = require('./routes/userRoutes');
// config----
const config = require('./config');
const passportConfig = require('./passportconfig');
const appConfig = require('./appConfig');

const app = express();
const PORT = process.env.PORT || 3000;

const seedDB = require('./seedsDB');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongo);
// seedDB();

appConfig(app);
passportConfig(passport);

app.get('/', (req, res) => {
  res.send('this is the root path ');
});

app.use('/api/user', userRoutes);
app.use('/api/poll', pollRoutes);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
