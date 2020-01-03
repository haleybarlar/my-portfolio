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
      height: '500',
      width: '100%',
    }


    let images = (this.props.currentProject.image && this.props.currentProject.image.length > 1 ? 
      this.props.currentProject.image.map(one => <img src={one} alt="" />)
    : <div id="youtube"><YouTube videoId={this.props.currentProject.url} opts={opts}/></div>)

    return (
      <div className="show-page">
        <div className="show-description">
          <h1>{this.props.currentProject.name}</h1>

          <div id="show-imgs">
            {images}
          </div>
          <div id="show-p">
            <p>{this.props.currentProject.description}</p>
            <p>Created using {this.props.currentProject.languages}.</p>
          </div>
        </div>

        <div className="other-projects">
          <h1>Other Projects</h1>
          <Work handleClick={this.props.handleClick} projects={this.props.projects} page={this.props.page}/>
        </div>
      </div>
    )
  }
}

export default ShowPage
