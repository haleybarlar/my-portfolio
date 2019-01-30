import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../css/navbar.scss'
import Burger from './Burger.js'

class Navbar extends Component {

  state = {
    isMenuOpen: false
  }

  isMenuOpen = (boo) => {
    this.setState({
      isMenuOpen: boo
    })
  }

  render() {
    console.log(this.state.isMenuOpen)

    return (
      <div className="navbar" style={{ height: this.state.isMenuOpen ? '100%' : null}}>
        <Link to="/" onClick={this.props.setClicked}>
          <h1>HB</h1>
        </Link>
        <Burger setClicked={this.props.setClicked} isMenuOpen={this.isMenuOpen}/>
        <div className="nav-right">
          <Link to="/">
            <p className="padding" onClick={this.props.setClicked}>HOME</p>
          </Link>
          <Link to="/about">
            <p className="padding">ABOUT</p>
          </Link>
          <a href="https://drive.google.com/open?id=1Dumj7Ak7axK3NAB5G4LeLGMG52ipe3lb" alt="" target="_blank"><p className="padding">RÉSUMÉ</p></a>
          <a href="mailto:hbarlar1@gmail.com" target="_top"><p id="contact">CONTACT</p></a>
        </div>
      </div>
    )
  }
}

export default Navbar
