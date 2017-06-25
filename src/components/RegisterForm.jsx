import React from 'react';
import { connect } from 'react-redux';
import { register } from './../redux/actions/regsiterUser';

const RegisterForm = ({ register, history }) => {
  let email = null;
  let password = null;
  const submitHandler = (event) => {
    event.preventDefault();
    register(email.value, password.value)
    .then((data) => {
      console.log(data);
      history.replace('/dashboard');
    })
    .catch((err) => { console.log(err); });
  };
  return (
    <form className="container" onSubmit={submitHandler}>
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-7">
          <div className="form-group">
            <small id="helpId" className="text-muted">Enter your email</small>
            <input type="text" className="form-control" ref={input => email = input} />
          </div>

          <div className="form-group">
            <small id="helpId" className="text-muted">Enter your password</small>
            <input type="text" className="form-control" ref={input => password = input} />
          </div>

          <div className="form-group">
            <input type="submit" className="btn btn-primary" aria-describedby="helpId" value="sign-up" />
          </div>
        </div>
      </div>
    </form>
  );
};


const mapDispatchToProps = dispatch => ({
  register: (email, password) => dispatch(register(email, password)),
});

export default connect(null, mapDispatchToProps)(RegisterForm);
