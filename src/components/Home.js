
import React, { Component } from 'react'
import About from './About.js'
import Work from './Work.js'
import '../css/home.scss'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <About />
        <Work handleClick={this.props.handleClick} projects={this.props.projects}/>
      </div>
    )
  }
}

export default Home
