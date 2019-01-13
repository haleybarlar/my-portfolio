import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/navbar.scss'
import Burger from './Burger.js'

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <Link to="/" onClick={this.props.setClicked}>
          <h1>HALEY<span>BARLAR</span></h1>
        </Link>
        <Burger setClicked={this.props.setClicked}/>
        <div className="nav-right">
          <Link to="/">
            <p className="padding">HOME</p>
          </Link>
          <Link to="/about">
            <p className="padding">ABOUT</p>
          </Link>
          <Link to="/contact">
            <p id="contact">CONTACT</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
