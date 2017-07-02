import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const PollTopics = ({ pollTopics, increaseVotes, pollId }) => {
  return (
    <ul className="list-group">
      {pollTopics.map(topic => (
        <li className="list__item list__item-topics" key={topic._id}>
          <span className="list__item-left">{topic.title}</span>
          <span className="list__item-right">
            <FontAwesome
              name="thumbs-up"
              size="2x"
              onClick={() => { increaseVotes(pollId, topic._id); }} />
          </span>
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

