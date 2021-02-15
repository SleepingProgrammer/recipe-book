import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import createContainer from "meteor/react-meteor-data";
import Header from "./layouts/components/Header";
import Body from "./layouts/components/Body";
import './default.html';
import './main.html';
import "/lib/routes";
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

Meteor.startup(() => {
  render((
    <BrowserRouter>
      <div>
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  ), document.getElementById('react-target'))
});
