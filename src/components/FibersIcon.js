import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../css/WorkIcon.scss'

class FibersIcon extends Component {

  state = {
    clicked: false,
    id: ""
  }

  handleClick = (event) => {
    let currentProject = this.props.project

    this.setState({
      clicked: true,
      id: event.target.id
    })

    this.props.handleClick(event, currentProject)
  }

  render() {
    if (this.state.clicked) {
      return <Redirect to={`/${this.state.id}`} />
    }

    return (
      <div className="container" onClick={this.handleClick}>
        <img src={this.props.project.image} alt="" className="icon-img"/>
        <div className="overlay" id ={this.props.project.id}>
          <div className="text">{this.props.project.name}</div>
        </div>
      </div>
    )
  }
}

export default FibersIcon
