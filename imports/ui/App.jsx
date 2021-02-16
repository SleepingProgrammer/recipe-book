import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

export class App extends React.Component {
  render() {
    return (
      <div>
        {Meteor.user().username}
        {this.props.children}
      </div>
    )
  }
}

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home...</h1>
      </div>
    )
  }
}

export class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About...</h1>
      </div>
    )
  }
}

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact...</h1>
      </div>
    )
  }
}
