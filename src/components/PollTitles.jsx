import React from 'react';
import { Link } from 'react-router-dom';
import FlipMove from 'react-flip-move';
import FontAwesome from 'react-fontawesome';

const PollTitles = ({ polls }) => (
  <FlipMove
    duration={750}
    easing="ease-out"
    maintainContainerHeight>
    <ul className="list-group">
      {polls.map(poll => (
        <li
          className="list-group-item justify-content-between"
          key={poll._id}>
          {poll.pollTitle}
          <Link to={`/poll/${poll._id}`}>
            <FontAwesome
              name="external-link"
              style={{ color: 'black' }} />
          </Link></li>
      ))}
    </ul>
  </FlipMove>
);

export default PollTitles;
