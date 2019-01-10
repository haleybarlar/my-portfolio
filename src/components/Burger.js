import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/burger.scss'

class Burger extends Component {

  render () {
    return (
      <Menu right>
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
      </Menu>
    )
  }
}

export default Burger
