import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../css/navbar.scss'
import Burger from './Burger.js'

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <Link to="/" onClick={this.props.setClicked}>
          <h1>HB</h1>
        </Link>
        <Burger setClicked={this.props.setClicked}/>
        <div className="nav-right">
          <Link to="/">
            <p className="padding" onClick={this.props.setClicked}>HOME</p>
          </Link>
          <Link to="/about">
            <p className="padding">ABOUT</p>
          </Link>
          <a href="mailto:hbarlar1@gmail.com" target="_top"><p id="contact">CONTACT</p></a>
        </div>
      </div>
    )
  }
}

export default Navbar
