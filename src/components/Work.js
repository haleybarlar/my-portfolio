import React, { Component } from 'react'
import FibersIcon from './FibersIcon.js'
import '../css/work.scss'

class Work extends Component {

  render() {
    let developmentProjects = this.props.projects.filter(project => project.type === 'development').map(project => <FibersIcon project={project} handleClick={this.props.handleClick}/>)

    let fibersProjects = this.props.projects.filter(project => project.type === 'fibers').map(project => <FibersIcon project={project} handleClick={this.props.handleClick}/>)

    return (
      <div className="work">
        <div className="one">
          <h1 className="title">DEVELOPMENT</h1>
          {developmentProjects}
        </div>
        <div className="one">
          <h1 className="title">FIBERS</h1>
          {fibersProjects}
        </div>
      </div>
    )
  }
}

export default Work
