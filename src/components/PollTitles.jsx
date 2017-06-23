import React from 'react';
import { Link } from 'react-router-dom';

const PollTitles = ({polls}) => {
  return (
    <div>
      {polls.map(poll => (
        <p key={poll._id}>{poll.poll} <Link to={`/poll/${poll._id}`} >Go here!</Link></p>
      ))}
    </div>
  );
};

export default PollTitles;
