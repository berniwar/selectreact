
import { Meteor } from 'meteor/meteor';
//import Meteor library
import React from 'react';
//import React library
import { render } from 'react-dom';
//import the render function from react-dom

import Header from '../imports/components/Header.jsx';
import {routes} from '../imports/routes.jsx';


//import the React component that we haven't created yet! ...oops

Meteor.startup(() => {
  render(routes(), document.getElementById('app'));
});
