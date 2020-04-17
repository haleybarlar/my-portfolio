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

function App () {
  return (
    <div className='App'>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
        {/* <Route path={`/project/${this.state.currentProject.id}`} render={() => 
          <ShowPage 
            setClicked={this.setClicked} 
            currentProject={this.state.currentProject} 
            handleClick={this.handleClick} 
            projects={this.state.projects} 
            page={this.state.page}
          />
        }/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/contact" component={Contact}/> */}
      </Switch>
    <Footer />
  </div>
  )
}

export default withRouter(App)
