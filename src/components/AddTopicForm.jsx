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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topicTitle"
          ref={(input) => { topicTitle = input; }}
          placeholder="Add new topic"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddTopicForm;
