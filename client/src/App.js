import React from "react";
import "./App.css";
import Nav from './components/Nav'
import Home from './pages/Home'
import Saved from './pages/Saved'
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import SearchResults from "./components/SearchResults";


function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}


export default App;
