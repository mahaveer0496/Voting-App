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
    <form className="list__item" onSubmit={handleSubmit}>
      <div className="input__field">
        <input
          className="poll-text"
          type="text"
          name="pollTitle"
          ref={(input) => { pollTitle = input; }}
          placeholder="Enter new poll title" />
      </div>

      <div className="input__field">
        <input className="btn" type="submit" />
      </div>
    </form>
  );
};

export default AddPollForm;
