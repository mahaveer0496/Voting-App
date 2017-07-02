import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';

import BarGraph from './BarGraph';
import AddPollForm from './AddPollForm';
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
      <div className="dashboard">
        <div className="inner__container">

          <h1 className="dashboard-heading">
            {text}
          </h1>
          <div className="dashboard__data-container">            
            <div className="dashboard__left" >
              <AddPollForm />
              {userPolls.map(poll => (
                <div className="list__item" key={poll._id}>
                  <span className="list__item-left" onClick={() => { this.setPoll(poll.pollTitle, poll); }}>
                    {poll.pollTitle}
                  </span>
                  <span className="list__item-right">
                    <button className="button-delete" onClick={() => this.deletePoll(poll._id)} >
                      <FontAwesome name="minus" />
                    </button>
                  </span>
                </div>
              ))}

            </div>

            <div className="dashboard__right" >
              <div className="dashboard__right-chart">

                <BarGraph labels={labels} data={data} />
              </div>


            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
