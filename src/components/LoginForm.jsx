import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logUser } from './../redux/actions/logUserIn';

const LoginForm = ({ logUser, history }) => {
  let email = null;
  let password = null;
  const submitHandler = (event) => {
    event.preventDefault();
    logUser(email.value, password.value)
      .then((data) => {
        history.replace('/dashboard');
      })
      .catch((err) => { console.log(err); });
  };

  return (
    <div className="form__container-outer">
      <div className="form__container">
        <div className="form__left">
          <div className="form__left-text">
            <p className="welcome_text">Welcome<br /> back!</p>
          </div>
        </div>

        <div className="form__right">
          <form method="POST" className="form" onSubmit={submitHandler}>
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-7">
                <div className="input__field">
                  <p className="text-help">Enter your email</p>
                  <input type="text" className="text" placeholder="enter your email" ref={input => email = input} />
                </div>

                <div className="input__field input__field-last">
                  <p className="text-help">Enter your password</p>
                  <input type="text" className="password" placeholder="enter your password" ref={(input) => { password = input; }} />
                </div>

                <div>
                  Don't have an account ?<Link to="/register"> Sign In</Link>
                </div>

                <div className="input__field">
                  <input className="button button-submit" type="submit" value="Log In" />
                </div>
              </div>
            </div>
          </form>

        </div>


      </div>

    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logUser: (email, password) => dispatch(logUser(email, password)),
});
export default connect(null, mapDispatchToProps)(LoginForm);
