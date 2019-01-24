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
    }, () => this.props.isMenuOpen(false))
    this.props.setClicked()
  }

  handleStateChange = (state) => {
    this.setState({menuOpen: state.isOpen})
    this.props.isMenuOpen(!this.state.menuOpen)
  }

  render () {
    return (
      <Menu
          right
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
        <div className="nav-right">
          <Link to="/">
            <p onClick={this.closeMenu}>HOME</p>
          </Link>
          <Link to="/about">
            <p onClick={this.closeMenu}>ABOUT</p>
          </Link>
          <a href="mailto:hbarlar1@gmail.com" target="_top"><p id="contact">CONTACT</p></a>
        </div>
      </Menu>
    )
  }
}

export default Burger
