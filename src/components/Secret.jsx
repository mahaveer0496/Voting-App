import React from 'react';
import { connect } from 'react-redux';

import { logOut } from './../redux/actions/logUserOut';

const Secret = ({ logOut, history }) => (
  <div className="container">
    <h1 className="text-center">
      this is the secret page
      </h1>
    <button
      onClick={() => logOut(history)}
      className="btn btn-primary"
    >
      Logout
      </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  logOut: history => dispatch(logOut(history)),
});

export default connect(null, mapDispatchToProps)(Secret);
