import React from 'react';
import { connect } from 'react-redux';
import { register } from './../redux/actions/regsiterUser';
import { Link } from 'react-router-dom';

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
    <div className="form__container-outer">
      <div className="form__container">
        <div className="form__left">
          <div className="form__left-text">
            <p className="welcome_text">Get ready!</p>
          </div>
        </div>

        <div className="form__right">
          <form method="POST" className="form" onSubmit={submitHandler}>
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-7">

                <div className="input__field">
                  <p className="text-help">Enter your name</p>
                  <input type="text" className="text" placeholder="enter your name" ref={input => email = input} />
                </div>

                <div className="input__field">
                  <p className="text-help">Enter your email</p>
                  <input type="text" className="text" placeholder="enter your email" ref={input => email = input} />
                </div>

                <div className="input__field input__field-last">
                  <p className="text-help">Enter your password</p>
                  <input type="text" className="password" placeholder="enter your password" ref={(input) => { password = input; }} />
                </div>

                <div>
                  Already have an account? <Link to="/login"> Log In</Link>
                </div>

                <div className="input__field">
                  <input className="button button-submit" type="submit" value="Sign In" />
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
  register: (email, password) => dispatch(register(email, password)),
});

export default connect(null, mapDispatchToProps)(RegisterForm);
