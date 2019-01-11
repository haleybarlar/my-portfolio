import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/navbar.scss'
import Burger from './Burger.js'

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <h1>HALEY<span>BARLAR</span></h1>
        </Link>
        <Burger />
        <div className="nav-right">
          <Link to="/">
            <p>HOME</p>
          </Link>
          <Link to="/about">
            <p>ABOUT</p>
          </Link>
          <Link to="/contact">
            <p>CONTACT</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
