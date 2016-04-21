import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home"/>

        <div className="container">
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }
}
