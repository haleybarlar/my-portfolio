import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/burger.scss'

class Burger extends Component {

  state = {
    menuOpen: false
  }

  closeMenu = () => {
    this.setState({
      menuOpen: false
    })

    this.props.setClicked()
  }

  render () {
    return (
      <Menu right isOpen={this.state.menuOpen}>
        <div className="nav-right">
          <Link to="/">
            <p onClick={this.closeMenu}>HOME</p>
          </Link>
          <Link to="/about">
            <p onClick={this.closeMenu}>ABOUT</p>
          </Link>
          <a href="mailto:hbarlar1@gmail.com" target="_top">CONTACT</a>
        </div>
      </Menu>
    )
  }
}

export default Burger
