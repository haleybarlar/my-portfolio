import React from 'react'
import '../css/work.scss'

export default function Work (props) {
  const allProjects = props.projects && props.projects.reverse().map(project => {
    return <div className='project'>
      <div className='images'>
        {project.fields.Image && project.fields.Image.map(image => <img src={image.url} alt={project.fields.altText}/>)}
      </div>
      <div className='info'>
        <h1 className='name'>{project.fields.Name}</h1>
        <p className='description'>{project.fields.Description}</p>
        <p className='created-using'>created using</p>
        <p className='stack'>{project.fields.Stack}</p>
        <div className='links'>
          <a href={project.fields.Link}>visit site</a>
          {project.fields.Github && <a href={project.fields.Github}>github</a>}
        </div>
      </div>
    </div>
  })

  return (
    <div className='work'>
      {allProjects}
    </div>
  )
}
