import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logOut } from './../redux/actions/logUserOut';

const Navigation = ({ logOut, isAuthenticated, history }) => {
  return (
    <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">Navbar</Link>

      <div className="collapse navbar-collapse justify-content-end" id="navbar" >
        {!isAuthenticated &&
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/register">Sign-Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>}
        {isAuthenticated &&
          <button
            onClick={() => {
              logOut();
              history.replace('/');
            }}
            className="btn btn-primary"
          >
            LogOut
          </button>}
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => ({
  logOut: history => dispatch(logOut(history)),
});

export default withRouter(connect(null, mapDispatchToProps)(Navigation));
