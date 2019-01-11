import React, { Component } from 'react'
import allProjects from '../projects_data.js'
import DevelopmentIcon from './DevelopmentIcon.js'
import FibersIcon from './FibersIcon.js'
import '../css/work.scss'

class Work extends Component {

  render() {
    let developmentProjects = allProjects.filter(project => project.type === 'development').map(project => <DevelopmentIcon project={project}/>)

    let fibersProjects = allProjects.filter(project => project.type === 'fibers').map(project => <FibersIcon project={project}/>)

    return (
      <div className="work">
        <h1>Development</h1>
        {developmentProjects}
        <h1>Fibers</h1>
        {fibersProjects}
      </div>
    )
  }
}

export default Work
