import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../css/WorkIcon.scss'

class FibersIcon extends Component {

  render() {

    return (
      <div className="container" onClick={this.props.handleClick}>
        <img src={this.props.project.image} alt="" className="icon-img"/>
        <div className="overlay" id ={this.props.project.id}>
          <div className="text">{this.props.project.name}</div>
        </div>
      </div>
    )
  }
}

export default FibersIcon
