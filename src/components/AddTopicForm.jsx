import React from 'react';
import axios from 'axios';

const AddTopicForm = ({ pollId, addNewTopic }) => {
  let topicTitle = null;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(topicTitle);
    console.log(pollId);
    addNewTopic(pollId, topicTitle.value);
    topicTitle.value = '';
  };
  return (
    <div>
      <form className="list__item" onSubmit={handleSubmit}>
        <div className="input__field">
          <input
            className="poll-text"
            type="text"
            name="topicTitle"
            ref={(input) => { topicTitle = input; }}
            placeholder="Add new topic"
          />
        </div>

        <div className="form-group">
          <input
            className="btn btn-outline-primary"
            type="submit" />

        </div>
      </form>
    </div>
  );
};

export default AddTopicForm;
