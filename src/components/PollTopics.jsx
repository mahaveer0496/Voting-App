import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

const PollTopics = ({ topics, increaseVotes, pollId }) => {
  return (
    <div>
      {topics.map(topic => (
        <div key={topic._id}>
          <span>{topic.title}</span>
          <progress value={topic.votes} max={50} key={topic._id} />
          <button onClick={() => { increaseVotes(pollId, topic._id); }}>Vote for this!</button>
        </div>
      ))}

    </div>
  );
};

PollTopics.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  })).isRequired,
  increaseVotes: PropTypes.func.isRequired,
};


export default PollTopics;

