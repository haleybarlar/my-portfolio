import React, { Component } from 'react'
import '../css/home.scss'

class ShowPage extends Component {

  state = {

  }

  render() {
    console.log(this.props.currentProject)

    return (
      <div className="show-page">
        <h1>{this.props.currentProject.name}</h1>
      </div>
    )
  }
}

export default ShowPage
