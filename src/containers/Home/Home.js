import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as authActions from 'redux/modules/auth';

@connect(
  state => ({
    user: state.auth.user,
    loggingIn: state.auth.loggingIn,
    loginError: state.auth.loginError
  }),
  authActions)

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    loggingIn: PropTypes.bool.isRequired,
    loginError: PropTypes.string
  };

  handleLogIn = () => {
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    this.props.login(email, password);
  }

  render() {
    return (
      <div>
        <Helmet title="Home"/>

        <div className="container">
        {this.props.loginError &&
          <div className="error">{this.props.loginError}</div>
        }
          <input type="text" ref="email" placeholder="Email" />
          <br />
          <input type="password" ref="password" placeholder="Contraseña" />
          <br />
          <button onClick={this.handleLogIn}>{this.props.loggingIn ? 'Logging in...' : 'Log in'}</button>
        </div>
      </div>
    );
  }
}
