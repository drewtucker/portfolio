import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Content from './Content';
import logo from './logo.svg';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <Navbar />
      <Banner />
      <Content />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
