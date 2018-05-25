import React, { Component } from 'react';
import './App.css';
import { FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './components/Register';
import FindUser from './components/FindUser';
import InfoUser from './components/InfoUser';

const $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={FindUser} />
          <Route path="/Register" component={Register} />
          <Route path="/InfoUser" component={InfoUser} />
        </div>
      </Router>
    );
  }
}

export default App;
