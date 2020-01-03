import React, { Component } from 'react'
import '../css/WorkIcon.scss'
import { Redirect, withRouter, Link } from 'react-router-dom'

class FibersIcon extends Component {

  state = {
    clicked: false,
    id: ""
  }

  handleClick = (event) => {
    let id = event.target.id
    let currentProject = this.props.project

    if (this.props.location.pathname.split('/')[1] !== '/project') {
      this.setState({
        clicked: true,
        id
      })
    } else {
      this.setState({
        clicked: false
      })
    }

    this.props.handleClick(id, currentProject)
  }

  render() {
    const currentProject = this.props.project

    return (
      <Link to={`/project/${currentProject.id}`} onClick={this.handleClick} aria-label={currentProject.label}>
        <img src={currentProject.image[0]} alt={currentProject.name} className="icon-img"/>
      </Link>
    )
  }
}

export default withRouter(FibersIcon)
