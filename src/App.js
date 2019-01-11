import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import AboutPage from './components/AboutPage.js'
import ShowPage from './components/ShowPage.js'
import allProjects from './projects_data.js'
import { Redirect } from 'react-router-dom'
import './App.css';

class App extends Component {

  state = {
    id: "",
    clicked: false,
    projects: allProjects,
    currentProject: ""
  }

  componentDidMount() {
    const id = JSON.parse(localStorage.getItem( "id" ))

    let currentProject = this.state.projects.filter(project => project.id === id)[0]

    this.setState({
      id: id,
      currentProject: currentProject
    })

  }

  handleClick = (event, currentProject) => {
    localStorage.setItem('id', event.target.id)

    this.setState({
      id: event.target.id,
      clicked: true,
      currentProject: currentProject
    })
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path={'/'} render={() => <Home handleClick={this.handleClick} projects={this.state.projects} />} />
            <Route exact path="/about" component={AboutPage}/>
            <Route path={`/${this.state.id}`} render={() => <ShowPage projects={this.state.projects} currentProject={this.state.currentProject}/>} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
