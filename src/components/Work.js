import React, { Component } from 'react'
import DevelopmentIcon from './DevelopmentIcon.js'
import FibersIcon from './FibersIcon.js'
import '../css/work.scss'

class Work extends Component {

  render() {
    let developmentProjects = this.props.projects.filter(project => project.type === 'development').map(project => <DevelopmentIcon project={project} handleClick={this.props.handleClick}/>)

    let fibersProjects = this.props.projects.filter(project => project.type === 'fibers').map(project => <FibersIcon project={project} handleClick={this.props.handleClick}/>)

    return (
      <div className="work">
        <h1>DEVELOPMENT</h1>
        {developmentProjects}
        <h1>FIBERS</h1>
        {fibersProjects}
      </div>
    )
  }
}

export default Work
