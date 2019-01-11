import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import GetMovie from './GetMovie'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>OMDB Search</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <GetMovie />
      </div>
    );
  }
}

export default App;
