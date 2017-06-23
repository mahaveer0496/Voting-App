const Poll = require('./models/PollModel');
const User = require('./models/UserModel');

const polls = [{
  poll: 'this is first poll',
  topics: [{
    title: 'topic 1 for first poll',
    votes: 2,
  }],
}, {
  poll: 'this is second poll',
  topics: [{
    title: 'topic 1 for second poll',
    votes: 2,
  }],
}, {
  poll: 'this is third poll',
  topics: [{
    title: 'topic 1 for third poll',
    votes: 2,
  }],
}];

const users = [{
  email: 'email1@email.com',
  password: 'password',
}, {
  email: 'email2@email.com',
  password: 'password',
}, {
  email: 'email3@email.com',
  password: 'password',
}];

module.exports = () => {
  Poll.remove({}).then(() => {
    polls.map((poll) => {
      Poll.create(poll);
    });
  });

  User.remove({}).then(() => {
    users.map((user) => {
      User.create(user);
    });
  });
};
