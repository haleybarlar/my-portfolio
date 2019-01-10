import React, { Component } from 'react'
import allProjects from '../projects_data.js'
import WorkIcon from './WorkIcon.js'

class Work extends Component {

  render() {
    let projects = allProjects.map(project => <WorkIcon project={project}/>)
    return (
      <div>
        {projects}
      </div>
    )
  }
}

export default Work

// <h1>Development</h1>
// <img src={'./mindful.png'} alt=""/>
// <img src={'./yogaCycle.png'} alt=""/>
// <img src={'./DH.png'} alt=""/>
// <h1>Fibers</h1>
// <img src={'./group.jpg'} alt=""/>
// <img src={'./beaded.JPG'} alt=""/>
// <img src={'./molded.JPG'} alt=""/>
