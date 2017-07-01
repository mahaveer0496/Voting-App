import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logOut } from './../redux/actions/logUserOut';

const Navigation = ({ logOut, isAuthenticated, history }) => {
  let nav = null;
  window.addEventListener('scroll', () => {
    const offSet = window.pageYOffset;
    if (offSet > 0) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  });
  return (
    <nav className="navbar" ref={ref => nav = ref}>
      <Link className="navbar-brand" to="/">Voting App</Link>
      {!isAuthenticated &&
        <ul className="navbar__right">
          <li >
            <Link to="/register">Sign-Up</Link>
          </li>
          <li >
            <Link to="/login">Login</Link>
          </li>
        </ul>}
      {isAuthenticated &&
        <ul className="navbar__right">
          <li >
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li >
            <button
              onClick={() => logOut(history)}
              className="btn btn-primary">
              Logout</button>
          </li>
        </ul>}

    </nav>
  );
};

const mapDispatchToProps = dispatch => ({
  logOut: history => dispatch(logOut(history)),
});

export default withRouter(connect(null, mapDispatchToProps)(Navigation));
