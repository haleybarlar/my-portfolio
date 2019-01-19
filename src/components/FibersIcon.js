import React, { Component } from 'react'
import '../css/WorkIcon.scss'
import { Redirect } from 'react-router-dom'

class FibersIcon extends Component {

  state = {
    clicked: false,
    id: ""
  }

  handleClick = (event) => {
    let id = event.target.id

    let currentProject = this.props.project

    this.setState({
      clicked: true
    })

    this.props.handleClick(id, currentProject)
  }

  render() {

    if (this.state.clicked) {
      return <Redirect to='/project'/>
    }

    return (
      <div className="container" onClick={this.handleClick}>
        <img src={this.props.project.image[0]} alt="" className="icon-img"/>
        <div className="overlay" id ={this.props.project.id}>
          <div className="text">{this.props.project.name}</div>
        </div>
      </div>
    )
  }
}

export default FibersIcon
