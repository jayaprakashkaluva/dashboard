
import React from 'react';
import {Router,Route,browserHistory,Switch} from 'react-router';
import Home from './views/home';
import {About} from './views/about';
import {Contact} from './views/contact';
export const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Router>
);