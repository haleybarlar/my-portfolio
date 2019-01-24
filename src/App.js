import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import AboutPage from './components/AboutPage.js'
import ShowPage from './components/ShowPage.js'
import Contact from './components/Contact.js'
import allProjects from './projects_data.js'
import './App.css';

class App extends Component {

  state = {
    id: "",
    clicked: false,
    projects: allProjects,
    currentProject: "",
    page: ""
  }

  componentDidMount() {
    this.setState({
      clicked: false
    })
    window.scrollTo(0, 0)
  }

  handleClick = (id, currentProject) => {
    this.setState({
      currentProject,
      clicked: true,
      page: 'project'
    })
  }

  setClicked = () => {
    this.setState({
      clicked: false
    })
  }

  render() {

    return (
      <div className="App">
        <Navbar setClicked={this.setClicked}/>
        <Switch>
            <Route exact path={'/'} render={() => <Home handleClick={this.handleClick} projects={this.state.projects} page={this.state.page}/>} />
            <Route path={'/project'} render={() => <ShowPage setClicked={this.setClicked} currentProject={this.state.currentProject} handleClick={this.handleClick} projects={this.state.projects} page={this.state.page}/>} />
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App
