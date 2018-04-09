import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav className='main-nav'>
        <div className='logo'>START BOOTSTRAP</div>
        <div className='links'>
          <div className='phone'>MENU</div>
          <div className='desktop'>ABOUT DOWNLOAD CONTACT</div>
        </div>
        </nav>
        <main>
          <div className='square animation1 animation2'>I am an L7</div>
        </main>
      </div>
    );
  }
}

export default App;
