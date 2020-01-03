import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../css/navbar.scss'
import HomemadeBurger from './HomemadeBurger.js'
// import "wicg-inert"


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
      <div className="navbar" style={{ height: this.state.isMenuOpen ? '100%' : null}}>
        <Link to="/" onClick={this.props.setClicked}>
          <h1>HB</h1>
        </Link>
        <button onClick={this.isMenuOpen} ref={this.ref}>
          {this.state.isMenuOpen ? 
            <i class="material-icons">close</i>
          : 
            <i class="material-icons">view_headline</i>
          }
        </button>
        {this.state.isMenuOpen ?  <HomemadeBurger closeMenu={this.closeMenu} /> : null}
        <div className="nav-right">
          <Link to="/">
            <p className="padding" onClick={this.props.setClicked}>HOME</p>
          </Link>
          <Link to="/about">
            <p className="padding">ABOUT</p>
          </Link>
          <a href="https://drive.google.com/file/d/1ashNYOudektyfoCFpPiZhM5iTWzpF7PR/view?usp=sharing" alt="" target="_blank"><p className="padding">RÉSUMÉ</p></a>
          <a href="mailto:hbarlar1@gmail.com" target="_top"><p id="contact">CONTACT</p></a>
        </div>
      </div>
    )
  }
}

export default Navbar
