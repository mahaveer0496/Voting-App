import React, { Component } from 'react';
import axios from 'axios';
import AddTopicForm from './AddTopicForm';
import PollTopics from './PollTopics';

import { withRouter } from 'react-router-dom';
class TopicsAndItsForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    };
    axios.get(`http://localhost:3000/api/poll/${this.props.match.params.pollId}`).then((res) => {
      // console.log(res.data.poll);
      this.setState({
        topics: res.data.topics,
      });
    });
    this.increaseVotes = this.increaseVotes.bind(this);
    this.addNewTopic = this.addNewTopic.bind(this);
  }

  increaseVotes(pollId, topicId) {
    // console.log(pollId, topicId);
    axios.post(`http://localhost:3000/api/poll/${pollId}/${topicId}`).then((res) => {
      this.setState({
        topics: res.data.topics,
      });
    });
  }

  addNewTopic(pollId, topicTitle) {
    axios.post(`http://localhost:3000/api/poll/${pollId}`, {
      title: topicTitle,
    }).then((res) => {
      this.setState({
        topics: res.data.topics,
      });
    });
  }
  render() {
    const { pollId } = this.props.match.params;
    const { topics } = this.state;
    const { isAuthenticated } = this.props;
    // console.log(pollId);
    return (
      <div>
        {isAuthenticated && <AddTopicForm
          pollId={pollId}
          addNewTopic={this.addNewTopic}
        />}
        <PollTopics
          topics={topics}
          pollId={pollId}
          increaseVotes={this.increaseVotes}
        />
      </div>
    );
  }
}

export default withRouter(TopicsAndItsForms);
