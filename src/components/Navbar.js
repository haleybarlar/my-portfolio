import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../css/navbar.scss'
import HomemadeBurger from './HomemadeBurger.js'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMenuOpen: false,
    }

    this.ref = React.createRef()
  }

  isMenuOpen = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    }, () => {
      const bodyClasses = document.querySelector('body').classList
      
      this.state.isMenuOpen ? bodyClasses.add('stopScroll') : bodyClasses.add('startScroll')
    })
  }

  closeMenu = (e) => {
    this.ref.current.focus()
    this.setState({
      isMenuOpen: false
    })
  }

  render() {
    return (
      <nav className="navbar">
        <a className='logo' href=''>hb</a>
        <div className='desktop'>
          <a href=''>work</a>
          <a href=''>about</a>
          <a href=''>resume</a>
          <a href=''>contact</a>
        </div>
        <button onClick={this.isMenuOpen}>
          {this.state.isMenuOpen ? 
            <i class="material-icons" ref={this.ref}>close</i>
          : 
            <i class="material-icons" ref={this.ref}>view_headline</i>
          }
        </button>
        {this.state.isMenuOpen && <HomemadeBurger closeMenu={this.closeMenu} />}
      </nav>
    )
  }
}

export default Navbar
