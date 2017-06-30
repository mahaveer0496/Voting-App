import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import BarGraph from './BarGraph';

const setLabels = currentPoll => currentPoll.pollTopics.map(topic => topic.title);

const setData = currentPoll => currentPoll.pollTopics.map(topic => topic.votes);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPolls: [],
      text: 'Text',
      labels: [],
      data: [],
      currentPoll: [],
    };
    axios.get('/api/user/userPolls').then((res) => {
      this.setState({
        userPolls: res.data.polls,
        text: res.data.polls[0].pollTitle,
        labels: setLabels(res.data.polls[0]),
        data: setData(res.data.polls[0]),
      });
    });
    this.deletePoll = this.deletePoll.bind(this);
    this.setPoll = this.setPoll.bind(this);
  }

  setPoll(text, currentPoll) {
    this.setState({
      text,
      currentPoll,
    }, () => {
      this.setState({
        labels: setLabels(this.state.currentPoll),
        data: setData(this.state.currentPoll),
      });
    });
  }


  deletePoll(pollId) {
    axios.delete(`/api/poll/${pollId}`).then((res) => {
      this.setState({
        userPolls: res.data.polls,
        text: res.data.polls[0].pollTitle,
        labels: setLabels(res.data.polls[0]),
        data: setData(res.data.polls[0]),
      });
    });
  }
  render() {
    const { userPolls, text, labels, data } = this.state;
    return (
      <div className="container">
        <h1 className="text-center">
          {text}
        </h1>
        <div className="row">
          <div className="col-6" >
            {userPolls.map(poll => (
              <div className="list-group-item d-flex justify-content-between" key={poll._id} >
                <span onClick={() => { this.setPoll(poll.pollTitle, poll); }}>{poll.pollTitle}</span>
                <button className="btn btn-danger btn-sm" onClick={() => this.deletePoll(poll._id)} >Delete</button>
              </div>
            ))}

          </div>
          <div className="col-6" >
            <BarGraph labels={labels} data={data} />
          </div>
        </div>
      </div >
    );
  }
}

export default Dashboard;
