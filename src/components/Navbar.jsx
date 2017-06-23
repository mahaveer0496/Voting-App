import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand" to="/">Navbar</Link>

    <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault" >
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign-Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
