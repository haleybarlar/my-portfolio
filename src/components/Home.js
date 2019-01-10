import React, { Component } from 'react'
import About from './About.js'
import Work from './Work.js'

class Home extends Component {

  render() {
    return (
      <div>
        <About />
        <Work />
      </div>
    )
  }
}

export default Home
