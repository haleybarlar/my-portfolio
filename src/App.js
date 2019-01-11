import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import AboutPage from './components/AboutPage.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={AboutPage}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
