import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <h1>haley barlar</h1>
        <div className="nav-right">
        <Link to="/">
          <p>home</p>
        </Link>
        <Link to="/work">
          <p>work</p>
        </Link>
        <Link to="/about">
          <p>about</p>
        </Link>
        <Link to="/contact">
          <p>contact</p>
        </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
