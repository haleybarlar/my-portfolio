import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import AboutPage from './components/AboutPage.js'
import ShowPage from './components/ShowPage.js'
import Contact from './components/Contact.js'
import allProjects from './projects_data.js'
import './App.css'

class App extends Component {

  state = {
    id: "",
    clicked: false,
    projects: allProjects,
    currentProject: "",
    page: "",
    focusMe: false,
    menuOpen: false
  }

  componentDidMount() {
    this.setState({
      clicked: false
    })
    window.scrollTo(0, 0)

    // persist on refresh
    if (this.props.location.pathname.split('/')[1] === 'project') {
      const currentProject = this.state.projects
        .filter(project => project.id == this.props.location.pathname.split('/')[2])[0]
      this.setState({
        currentProject
      })
    }
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

  menuOpen = () => {
    this.setState({
      menuOpen: true
    })
  }

  menuClose = () => {
    this.setState({
      menuOpen: false
    })
  }

  render() {
    return (
      <div className={`${App} ${this.state.menuOpen ? 'stopScoll' : 'startScroll'}`}>
        <Navbar setClicked={this.setClicked} menuOpen={this.menuOpen} menuClose={this.menuClose}/>
        <Switch>
            <Route exact path={'/'} render={() => 
              <Home 
                handleClick={this.handleClick} 
                projects={this.state.projects} 
                page={this.state.page}
              />
            }/>
            <Route path={`/project/${this.state.currentProject.id}`} render={() => 
              <ShowPage 
                setClicked={this.setClicked} 
                currentProject={this.state.currentProject} 
                handleClick={this.handleClick} 
                projects={this.state.projects} 
                page={this.state.page}
              />
            }/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App)
