import React from "react";
import "../css/home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="main">
        <div className="face"></div>
        <div className="greeting">
          <div className="words">
            <h1>Hey, I’m Haley Barlar.</h1>
            <h2>
              I’m a <span>UX/UI Engineer</span> at Monstro.
            </h2>
          </div>
        </div>
        <p>
          I studied Fiber Arts at the Savannah College of Art and Design, spent
          four years abroad working as an English and yoga teacher, and
          eventually found my place in engineering. Creative coding massively
          appeals to me, and I enjoy spending my days learning, growing, and
          exploring.
        </p>
        <div className="get-excited">
          <p>
            <span>I get excited about:</span> Accessibility, React.js, HTML +
            CSS, SASS, Typescript, Javascript, Figma, Svelte, UX/UI, P5.js, and
            being a good person during code review
          </p>
        </div>
      </div>
    </div>
  );
}
