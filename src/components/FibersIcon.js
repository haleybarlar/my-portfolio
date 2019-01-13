import React, { Component } from 'react'
import '../css/WorkIcon.scss'

class FibersIcon extends Component {

  state = {
    clicked: false,
    id: ""
  }

  handleClick = (event) => {
    let id = event.target.id

    let currentProject = this.props.project

    // this.setState({
    //   clicked: true,
    //   id: event.target.id
    // })

    this.props.handleClick(id, currentProject)
  }

  render() {

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
