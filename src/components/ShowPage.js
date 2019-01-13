import React, { Component } from 'react'
import '../css/showpage.scss'
import Work from './Work.js'
import YouTube from 'react-youtube';

class ShowPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {

    const opts = {
      height: 'auto',
      width: '100%',
    }

    let images = (this.props.currentProject.image && this.props.currentProject.image.length > 1 ? this.props.currentProject.image.map(one => <img src={one} alt="" />) :  <div id="youtube"><YouTube videoId={this.props.currentProject.url} opts={opts}/></div>)

    console.log(this.props.currentProject)
    return (
      <div className="show-page">
        <div className="show-description">
          <h1>{this.props.currentProject.name}</h1>
          <p>{this.props.currentProject.description}</p>
          <p>{this.props.currentProject.languages}</p>
          {images}
        </div>

        <div className="other-projects">
          <h1>Other Projects</h1>
          <Work handleClick={this.props.handleClick} projects={this.props.projects} />
        </div>
      </div>
    )
  }
}

export default ShowPage

// <div className="show-description">
//   <h1>{this.props.currentProject.name}</h1>
//   <p>{this.props.currentProject.description}</p>
//   <p>{this.props.currentProject.languages}</p>
//   {images}
// </div>
//
// <div className="other-projects">
//   <Link to='/'><button>go back</button></Link>
// </div>
