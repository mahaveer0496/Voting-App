import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPolls: [],
    };
    axios.get('/api/user/userPolls').then((res) => {
      this.setState({
        userPolls: res.data.polls,
      });
    });
    this.deletePoll = this.deletePoll.bind(this);
  }

  deletePoll(pollId) {
    axios.delete(`/api/poll/${pollId}`).then((res) => {
      this.setState({
        userPolls: res.data.polls,
      });
    });
  }
  render() {
    const { userPolls } = this.state;
    return (
      <div className="container">
        <h1 className="text-center">
          this is the Dashboard page
        </h1>
        <div className="row">
          <div className="col-6" >
            {userPolls.map(poll => (
              <p
                key={poll._id}
              >
                {poll.pollTitle}
                <button onClick={() => this.deletePoll(poll._id)} >
                  Delete
                </button>
              </p>
            ))}

          </div>
          {/* <div className="col-6" ></div>*/}
        </div>
      </div>
    );
  }
}

export default Dashboard;
