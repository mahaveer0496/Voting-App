const express = require('express');
const authMiddleware = require('./../authMiddleware');
const Poll = require('./../models/PollModel');
const User = require('./../models/UserModel');
const Ip = require('./../models/IpModel');

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
      poll.pollTopics.push({
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
    // const { ip } = req.body;
    const ip = '2';
    Ip.findOne({ ip })
      .then((singleIP) => {
        if (!singleIP) {
          Ip.create({ ip }).then((createdIp) => {
            createdIp.topics.push({
              topicId,
              hasVoted: true,
            });
            createdIp.save();
            res.send(createdIp);
          });
        } else {
          const index = singleIP.topics.findIndex(topic => topic.topicId == topicId);
          if (index == -1) {
            singleIP.topics.push({
              topicId,
              hasVoted: true,
            });
            singleIP.save();
            res.send('voted successfuly');
          } else {
            res.send('can only vote once per topic');
          }
        }
      })
      .catch(err => res.send(err));
  });

module.exports = pollRoutes;

//  return singleIP;
//       })
//       .then((IpData) => {
//         const filteredArr = IpData.topics.filter((topic) => {
//           if (topic.topicId == topicId) return false;
//           return true;
//         });

//         if (filteredArr.length === 0) {
//           IpData.topics.push({
//             topic: topicId,
//             hasVoted: true,
//           });
//           IpData.save();
//           return res.send(filteredArr);
//         }
//         return res.send('can only vote once per topic');
