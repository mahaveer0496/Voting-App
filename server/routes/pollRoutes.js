const express = require('express');
const authMiddleware = require('./../authMiddleware');
const Poll = require('./../models/PollModel');
const User = require('./../models/UserModel');

const pollRoutes = express.Router();

pollRoutes.route('/')
  .get((req, res) => {
    Poll.find({}).then((poll) => {
      res.send(poll);
    });
  })
  .post(authMiddleware, (req, res) => {
    const { pollTitle } = req.body;
    const { email } = req.user;
    Poll.create({
      pollTitle,
      createdBy: email,
    }).then((poll) => {
      User.findOne({ email }).then((user) => {
        user.polls.push(poll._id);
        user.save();
        res.redirect('/api/poll');
      });
    });
  });


pollRoutes.route('/:pollId')
  .get((req, res) => {
    const { pollId } = req.params;
    Poll.findById(pollId).then((poll) => {
      res.send(poll);
    });
  })
  .post(authMiddleware, (req, res) => {
    const { pollId } = req.params;
    const { title } = req.body;
    Poll.findById(pollId).then((poll) => {
      poll.topics.push({
        title,
        votes: 0,
      });
      poll.save();
      res.send(poll);
    });
  })
  .delete(authMiddleware, (req, res) => {
    const { pollId } = req.params;
    User.findById(req.user._id)
      .then((user) => {
        Poll.findOneAndRemove({ _id: pollId })
          .then(() => {
            user.polls = user.polls.filter(id => id != pollId);
            user.save();
            return res.redirect(303, '/api/user/userPolls');
          })
          .catch(() => res.json({ message: 'Poll with given title does not exist' }));
      })
      .catch(() => res.json({ message: 'User does not exist' }));
  });

pollRoutes.route('/:pollId/:topicId')
  .post((req, res) => {
    const { pollId, topicId } = req.params;
    Poll.findById(pollId).then((poll) => {
      poll.topics.map((topic) => {
        if (topic._id == topicId) {
          topic.votes += 1;
        }
        return topic;
      });
      poll.save();
      res.send(poll);
    });
  });

module.exports = pollRoutes;
