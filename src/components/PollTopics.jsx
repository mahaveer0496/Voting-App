import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const PollTopics = ({ pollTopics, increaseVotes, pollId }) => {
  return (
    <ul className="list-group">
      {pollTopics.map(topic => (
        <li className="list-group-item d-flex justify-content-between" key={topic._id}>
          <span>{topic.title}</span>
          <progress value={topic.votes} max={50} key={topic._id} />
          <FontAwesome
            name="thumbs-up"
            size="2x"
            onClick={() => { increaseVotes(pollId, topic._id); }} />
        </li>
      ))}

    </ul>
  );
};

PollTopics.propTypes = {
  pollTopics: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  })).isRequired,
  increaseVotes: PropTypes.func.isRequired,
};


export default PollTopics;

