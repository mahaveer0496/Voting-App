const express = require('express');
const Poll = require('./../models/PollModel');
const User = require('./../models/UserModel');

const pollRoutes = express.Router();

pollRoutes.route('/')
  .get((req, res) => {
    Poll.find({}).populate('createdBy').exec((error, poll) => {
      if (error) return res.send(error);
      return res.send(poll);
    });
  })
  .post((req, res) => {
    const { pollTitle, createdBy } = req.body;
    Poll.create({
      pollTitle,
      createdBy,
    }).then((poll) => {
      User.findById(createdBy).then((user) => {
        user.polls.push(poll._id);
        user.save();
        res.send('success');
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
  .post((req, res) => {
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
  });

pollRoutes.route('/:pollId/:topicId')
  .post((req, res) => {
    const { pollId, topicId } = req.params;
    // res.send({ pollId, topicId });
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
