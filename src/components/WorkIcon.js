import React, { Component } from 'react'
import '../css/WorkIcon.scss'

class WorkIcon extends Component {

  render() {
    return (
      <div className="container">
        <img src={this.props.project.image} alt="" className="icon-img"/>
        <div className="overlay">
          <div className="text">{this.props.project.name}</div>
        </div>
      </div>
    )
  }
}

export default WorkIcon
