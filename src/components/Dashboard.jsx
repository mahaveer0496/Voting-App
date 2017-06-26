import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import BarGraph from './BarGraph';

const setLabels = (userPolls) => {
  console.log(userPolls);
  const labels = userPolls[0].pollTopics.map(topic => topic.title);
  console.log(labels);
  return labels;
};

const setData = (userPolls) => {
  console.log(userPolls);
  const data = userPolls[0].pollTopics.map(topic => topic.votes);
  console.log(data);
  return data;
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPolls: [],
      text: 'Text',
      labels: [],
      data: [],
    };
    axios.get('/api/user/userPolls').then((res) => {
      this.setState({
        userPolls: res.data.polls,
        labels: setLabels(res.data.polls),
        data: setData(res.data.polls),
      });
    });
    this.deletePoll = this.deletePoll.bind(this);
    this.setText = this.setText.bind(this);
  }

  setText(text) {
    this.setState({
      text,
    });
  }


  deletePoll(pollId) {
    axios.delete(`/api/poll/${pollId}`).then((res) => {
      this.setState({
        userPolls: res.data.polls,
      }, () => {
        setLabels(this.state.userPolls);
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
              <div key={poll._id} >
                <span onClick={() => { this.setText(poll.pollTitle); }}>{poll.pollTitle}</span>
                <button onClick={() => this.deletePoll(poll._id)} >Delete</button>
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
