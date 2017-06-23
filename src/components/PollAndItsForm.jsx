import React, { Component } from 'react';
import axios from 'axios';
import AddPollForm from './AddPollForm';
import PollTitles from './PollTitles';

class PollAndItsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
    };
    axios.get('http://localhost:3000/api/poll').then((res) => {
      this.setState({
        polls: res.data,
      });
    });
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(polls) {
    this.setState({
      polls,
    });
  }

  render() {
    const { polls } = this.state;
    return (
      <div>
        <AddPollForm handleUpdate={this.handleUpdate} />
        <PollTitles polls={polls} />
      </div>
    );
  }
}

export default PollAndItsForm;
