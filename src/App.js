import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import AboutPage from './components/AboutPage.js'
import ShowPage from './components/ShowPage.js'
import { Redirect } from 'react-router-dom'
import allProjects from './projects_data.js'
import './App.css';

class App extends Component {

  state = {
    id: "",
    clicked: false,
    projects: allProjects
  }

  handleClick = (event) => {
    this.setState({
      id: event.target.id,
      clicked: true
    })
  }

  render() {
    console.log(this.state.id, this.state.clicked)

    if (this.state.clicked) {
      return <Redirect to={`/${this.state.id}`} />
    }

    return (
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path={'/'} render={() => <Home handleClick={this.handleClick} projects={this.state.projects} />} />
            <Route exact path="/about" component={AboutPage}/>
            <Route path={`/${this.state.id}`} component={ShowPage} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
