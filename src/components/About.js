import React, { Component } from 'react'
import '../css/about.scss'

class About extends Component {

  render() {
    return (
      <div className="about">
        <p>I'm Haley, a front end developer from Atlanta.  I enjoy creating apps with a foundation in functionality and accessibility.</p>
        <div>
          <img src={'./haley.jpg'} alt=""/>
        </div>
      </div>
    )
  }
}

export default About
