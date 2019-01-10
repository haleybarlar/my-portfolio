import React, { Component } from 'react';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
