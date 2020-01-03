import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/homemadeburger.scss'

class HomemadeBurger extends Component {

  render () {
    return (
        <div className="homemade-burger">
            {/* <div className="burger-links"> */}
                <Link to="/" onKeyDown={(e) => e.key === 13 && this.props.closeMenu} onClick={this.props.closeMenu}>
                    <p>HOME</p>
                </Link><br/>
                <Link to="/about" onKeyDown={(e) => e.key === 13 && this.props.closeMenu} onClick={this.props.closeMenu}>
                    <p>ABOUT</p>
                </Link><br/>
                <a 
                    href="https://drive.google.com/file/d/1ashNYOudektyfoCFpPiZhM5iTWzpF7PR/view?usp=sharing" 
                    alt="" 
                >
                    <p>RÉSUMÉ</p>
                </a><br/>
                <a href="mailto:hbarlar1@gmail.com" target="_top"><p id="contact">CONTACT</p></a>
            {/* </div> */}
        </div>
    )
  }
}

export default HomemadeBurger
