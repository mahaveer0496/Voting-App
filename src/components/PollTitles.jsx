import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';

const dummyPolls = [
  {
    pollTitle: ' this is title one',
    _id: '1233142',
    by: 'dave',
    time: '12-02-2017',
  },
  {
    pollTitle: ' this is title twta',
    _id: '12231142',
    by: 'shave',
    time: '12-02-2017',
  },
  {
    pollTitle: ' this is title three',
    _id: '1233dasd142',
    by: 'dawa',
    time: '12-02-2017',
  }, {
    pollTitle: ' this is title four',
    _id: '123dazxc3142',
    by: '1ava',
    time: '12-02-2017',
  }, {
    pollTitle: ' this is title four',
    _id: '123dazxasdc3142',
    by: '1ava',
    time: '12-02-2017',
  }, {
    pollTitle: ' this is title four',
    _id: '123da21212zxasdc3142',
    by: '1ava',
    time: '12-02-2017',
  },
];
const PollTitles = ({ history, polls }) => (
  <div className="inner__container">
    <ul className="polls">
      {polls.map(poll => (
        <li
          className="poll__title"
          key={poll._id}>
          <span className="title">{poll.pollTitle}</span>
          <span className="link">
            <Link to={`/poll/${poll._id}`}>
              <FontAwesome
                name="external-link"
                style={{ color: 'black' }} />
            </Link>

          </span>
          <p className="author">Created by <span>{poll.by}</span></p>
          <p className="time">Created at <span>{poll.time}</span></p>
        </li>
      ))}
    </ul>

  </div>

);

export default PollTitles;
