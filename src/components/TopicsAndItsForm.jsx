import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import AddTopicForm from './AddTopicForm';
import PollTopics from './PollTopics';
import BarGraph from './BarGraph';


const setLabels = currentPoll => currentPoll.pollTopics.map(topic => topic.title);

const setData = currentPoll => currentPoll.pollTopics.map(topic => topic.votes);


class TopicsAndItsForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pollTopics: [],
      labels: [],
      data: [],
    };
    axios.get(`http://localhost:3000/api/poll/${this.props.match.params.pollId}`).then((res) => {
      console.log(res.data);
      this.setState({
        pollTopics: res.data.pollTopics,
        labels: setLabels(res.data),
        data: setData(res.data),
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
          labels: setLabels(res.data),
          data: setData(res.data),
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
        labels: setLabels(res.data),
        data: setData(res.data),
      });
    });
  }
  render() {
    const { pollId } = this.props.match.params;
    const { pollTopics, labels, data } = this.state;
    const { isAuthenticated } = this.props;
    // console.log(pollId);
    return (
      <div className="topics__page">
        <div className="inner__container">
          <div className="topics">

            <div className="topics__container">
              <div className="topics__left">
                <div className="topics__left-outer-container">
                  <div className="topics__left-inner-container">
                    {isAuthenticated &&
                      <AddTopicForm
                        pollId={pollId}
                        addNewTopic={this.addNewTopic}
                      />}
                    <PollTopics
                      pollTopics={pollTopics}
                      pollId={pollId}
                      increaseVotes={this.increaseVotes}
                    />

                  </div>
                </div>
              </div>
              <div className="topics__right">
                <BarGraph labels={labels} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ip }) => ({ ip: ip.ip });

export default withRouter(connect(mapStateToProps, null)(TopicsAndItsForms));
