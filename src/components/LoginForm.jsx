import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { withRouter, Redirect } from 'react-router-dom';

import { logUser } from './../redux/actions/logUserIn';

const LoginForm = ({ logUser, isAuthenticated }) => {
  let email = null;
  let password = null;
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`before ${isAuthenticated}`);
    logUser(email.value, password.value);
    console.log(`after ${isAuthenticated}`);
  };

  return (
    <form method="POST" className="container" onSubmit={submitHandler}>
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-7">
          <div className="form-group">
            <small id="helpId" className="text-muted">Enter your email</small>
            <input type="text" className="form-control" ref={input => email = input} />
          </div>

          <div className="form-group">
            <small id="helpId" className="text-muted">Enter your password</small>
            <input type="text" className="form-control" ref={(input) => { password = input; }} />
          </div>

          <div className="form-group">
            <input type="submit" className="btn btn-primary" aria-describedby="helpId" value="Login" />
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = ({ isAuthenticated }) => ({ isAuthenticated });

const mapDispatchToProps = dispatch => ({
  logUser: (email, password) => dispatch(logUser(email, password)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
