import React, { Component } from 'react'
import About from './About.js'
import Work from './Work.js'
import '../css/home.scss'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <About />
        <Work />
      </div>
    )
  }
}

export default Home
