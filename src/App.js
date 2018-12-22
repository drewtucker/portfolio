import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Content from './Content';
import logo from './logo.svg';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowPosition: window.pageYOffset,
    };
  }

  handleScroll() {
    const nav = document.getElementById('navbar');
    this.setState({windowPosition: window.pageYOffset});
    if(this.state.windowPosition >= 555) {
     nav.style.backgroundColor = '#212121';
     nav.style.padding = '10px 0px 10px 0px';
    }
    else {
      nav.style.background = 'transparent';
    }  
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

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
