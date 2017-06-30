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
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="pollTitle"
          ref={(input) => { pollTitle = input; }}
          placeholder="Enter poll name" />
      </div>

      <div className="form-group">
        <input
          className="btn btn-outline-primary"
          type="submit" />
      </div>
    </form>
  );
};

export default AddPollForm;
