import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';

const dummyPolls = [
  {
    pollTitle: ' this is title one',
    _id: '1233142',
    by: 'dave',
  },
  {
    pollTitle: ' this is title twta',
    _id: '12231142',
    by: 'shave',
  },
  {
    pollTitle: ' this is title three',
    _id: '1233dasd142',
    by: 'dawa',
  }, {
    pollTitle: ' this is title four',
    _id: '123dazxc3142',
    by: '1ava',
  },
];
const PollTitles = ({ polls }) => (

  <ul className="polls">
    {dummyPolls.map(poll => (
      <li
        className="poll__title"
        key={poll._id}>
        <span className="title">{poll.pollTitle}</span>
        <Link to={`/poll/${poll._id}`}>
          <FontAwesome
            name="external-link"
            style={{ color: 'black' }} />
        </Link>
        <p>Created by <span className="author">{poll.by}</span></p>
      </li>
    ))}
  </ul>

);

export default PollTitles;
