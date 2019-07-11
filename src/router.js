import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import { ConnectedRouter } from 'react-router-redux';
import Header from './containers/Header';

import Home from './components/Home/index.js';
import Topic from './components/Topic/index.js';
import LifeCycle from './lifeCycle/ParentComponent';
import Performance from './performance/Parent';
import Hook from './hook/App';
import Block from './blocks';

import { SketchPicker } from './ice/index.js';

const RouterConfig = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/lifecycle" component={LifeCycle} />
          <Route path="/performance" component={Performance} />
          <Route path="/sketchpicker" component={SketchPicker} />
          <Route path="/hook" component={Hook} />
          <Route path="/block" component={Block} />

          <Redirect exact path="/" to="/home"/>
        </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;
