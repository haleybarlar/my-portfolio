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

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     document.getElementById("myTextField").focus()
  //   }
  // }

  isMenuOpen = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })

    this.props.menuOpen()
  }

  closeMenu = (e) => {
    this.ref.current.focus()
    this.setState({
      isMenuOpen: false
    })

    this.props.menuClose()
  }


  render() {
    return (
      <nav className="navbar" style={{ height: this.state.isMenuOpen ? '100%' : null}}>
        {/* <Link to="/" onClick={this.props.setClicked} aria-label="Home" id="myTextField">
          <h1>hb</h1>
        </Link>
        <button onClick={this.isMenuOpen}>
          {this.state.isMenuOpen ? 
            <i class="material-icons" ref={this.ref}>close</i>
          : 
            <i class="material-icons" aria-label="navigation menu" ref={this.ref}>view_headline</i>
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
        </div> */}

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
