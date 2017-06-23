import React from 'react';
import axios from 'axios';

const AddPollForm = ({ handleUpdate }) => {
  let pollTitle = null;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/poll', {
      pollTitle: pollTitle.value,
    }).then((res) => {
      handleUpdate(res.data);
    });
    pollTitle.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="pollTitle"
        ref={(input) => { pollTitle = input; }}
        placeholder="Enter poll name"
      />
      <input type="submit" />
    </form>
  );
};

export default AddPollForm;
