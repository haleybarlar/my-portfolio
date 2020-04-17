import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/homemadeburger.scss'
 
export default function HomemadeBurger () {
    return (
        <div className="homemade-burger">
            <Link to="/" onKeyDown={(e) => e.key === 13 && this.props.closeMenu} onClick={this.props.closeMenu}>
                <p>work</p>
            </Link><br/>
            <Link to="/about" onKeyDown={(e) => e.key === 13 && this.props.closeMenu} onClick={this.props.closeMenu}>
                <p>about</p>
            </Link><br/>
            <a 
                href="https://drive.google.com/file/d/1ashNYOudektyfoCFpPiZhM5iTWzpF7PR/view?usp=sharing" 
                alt="" 
            >
                <p>resume</p>
            </a><br/>
            <a href="mailto:hbarlar1@gmail.com" target="_top"><p id="contact">contact</p></a>
        </div>
    )
}