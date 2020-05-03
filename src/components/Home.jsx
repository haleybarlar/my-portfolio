import React from "react";
import "../css/home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="main">
        <div className="greeting">
          <img 
            src='./blindContour.png'
            alt='Illustration of a woman'
          />
          <div className='words'>
            <h1>hey, i’m haley.</h1>
            <h2>
              i’m a <span>frontend engineer</span> at blacklane.
            </h2>
          </div>
        </div>
        <div className="get-excited">
          <h3>i get excited about</h3>
          <div className="list">
            <p>accessibility, react.js, html + css, sass, typescript, javascript, figma, svelte, ux/ui</p>
          </div>
        </div>
      </div>
      <div className="cta">
        <Link to="/work">see some of my work</Link>
      </div>
    </div>
  );
}
