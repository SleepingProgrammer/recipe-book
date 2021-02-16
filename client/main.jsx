import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Guest from "./layouts/Guest/Guest";
import Admin from "./layouts/Admin/Admin";
import './default.html';
import './main.html';
import "/lib/routes";
import { withTracker } from 'meteor/react-meteor-data'

import { BrowserRouter, useHistory } from 'react-router-dom'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './accountHandlers.js';


formHelper = {};
routerHistory = {};

function RouteInitialization() {
  routerHistory = useHistory();
  return (<div></div>)
}
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

  }

  Loader() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="row">
          <div className="spinner-border" role="status">
            <span className="sr-only visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="row">
          <strong>
            {(this.props.user === undefined) ? "Loading..." : "Logging in..."}</strong>
        </div>
      </div>
    );
  }

  Main() {
    return (
      <BrowserRouter>
        <RouteInitialization />
        {this.props.user ?
          <Admin user={this.props.user} /> :
          <Guest user={this.props.user} />
        }
      </BrowserRouter>
    );
  }
  render() {
    return (this.props.user === undefined || this.props.loggingIn) ? this.Loader() : this.Main()
  }
}

export default Main = withTracker(params => {
  return {
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn()
  };
})(MainPage);

Meteor.startup(() => {
  render(<Main />, document.getElementById('react-target'))
});
