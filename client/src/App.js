import React, { Component } from "react";
import "./App.css";
import Nav from './components/Nav'
import Home from './pages/Home'
import Saved from './pages/Saved'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
