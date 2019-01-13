import React, { Component } from 'react'
import '../css/about.scss'

class About extends Component {

  render() {
    return (
      <div className="about">
        <p>I'm Haley, a front end developer with a background in Fine Art. I enjoy creating functional, accessible and beautiful apps.</p>
        <div>
          <img src={'./haley.jpg'} alt=""/>
        </div>
      </div>
    )
  }
}

export default About
