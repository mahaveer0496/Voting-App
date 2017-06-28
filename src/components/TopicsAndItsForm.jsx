import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import AddTopicForm from './AddTopicForm';
import PollTopics from './PollTopics';

class TopicsAndItsForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pollTopics: [],
    };
    axios.get(`http://localhost:3000/api/poll/${this.props.match.params.pollId}`).then((res) => {
      // console.log(res.data.poll);
      this.setState({
        pollTopics: res.data.pollTopics,
      });
    });
    this.increaseVotes = this.increaseVotes.bind(this);
    this.addNewTopic = this.addNewTopic.bind(this);
  }

  increaseVotes(pollId, topicId) {
    const { ip } = this.props;
    axios.post(`http://localhost:3000/api/poll/${pollId}/${topicId}`, {
      ip,
    }).then((res) => {
      if (res.data.pollTopics) {
        this.setState({
          pollTopics: res.data.pollTopics,
        });
      } else {
        alert(res.data);
      }
    });
  }

  addNewTopic(pollId, topicTitle) {
    axios.post(`http://localhost:3000/api/poll/${pollId}`, {
      title: topicTitle,
    }).then((res) => {
      this.setState({
        pollTopics: res.data.pollTopics,
      });
    });
  }
  render() {
    const { pollId } = this.props.match.params;
    const { pollTopics } = this.state;
    const { isAuthenticated } = this.props;
    // console.log(pollId);
    return (
      <div>
        {isAuthenticated && <AddTopicForm
          pollId={pollId}
          addNewTopic={this.addNewTopic}
        />}
        <PollTopics
          pollTopics={pollTopics}
          pollId={pollId}
          increaseVotes={this.increaseVotes}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ ip }) => ({ ip: ip.ip });

export default withRouter(connect(mapStateToProps, null)(TopicsAndItsForms));
