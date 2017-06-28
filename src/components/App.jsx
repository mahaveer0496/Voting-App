import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';
// components----
import PollAndItsForm from './PollAndItsForm';
import TopicsAndItsForm from './TopicsAndItsForm';
import Navigation from './Navbar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';

// actions-----
import { getUser } from './../redux/actions/getUser';
import { fetchIp } from './../redux/actions/getIp';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchIp, getUser } = this.props;
    fetchIp();
    getUser();
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        <Navigation isAuthenticated={isAuthenticated} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Switch>
                <Route exact path="/" render={() => <PollAndItsForm isAuthenticated={isAuthenticated} />} />
                <Route path="/poll/:pollId" render={() => <TopicsAndItsForm isAuthenticated={isAuthenticated} />} />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                {isAuthenticated ? <Route path="/dashboard" component={Dashboard} /> : <Redirect to="/" />}
              </Switch>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


const mapStateToProps = ({ pollAndAuth }) => ({ isAuthenticated: pollAndAuth.isAuthenticated });

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  fetchIp: () => dispatch(fetchIp()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

