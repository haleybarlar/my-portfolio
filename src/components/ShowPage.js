import React, { Component } from 'react'
import '../css/showpage.scss'
import { Link } from "react-router-dom";

class ShowPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    let images = this.props.currentProject.image.map(one => <img src={one} alt="" />)

    return (
      <div className="show-page">
        <div className="show-description">
          <h1>{this.props.currentProject.name}</h1>
          <p>{this.props.currentProject.description}</p>
          <p>{this.props.currentProject.languages}</p>
          {images}
        </div>

        <div className="other-projects">
          <Link to='/'><button>go back</button></Link>
        </div>
      </div>
    )
  }
}

export default ShowPage
