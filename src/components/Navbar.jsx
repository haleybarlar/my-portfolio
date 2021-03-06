import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.scss";
import HomemadeBurger from "./HomemadeBurger.jsx";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      activeLink: "",
    };

    this.ref = React.createRef();
  }

  componentDidMount() {
    this.setState({
      activeLink: document.location.pathname,
    });
  }

  isMenuOpen = () => {
    this.setState(
      {
        isMenuOpen: !this.state.isMenuOpen,
      },
      () => {
        const bodyClasses = document.querySelector("body").classList;

        this.state.isMenuOpen
          ? bodyClasses.add("stopScroll")
          : bodyClasses.add("startScroll");
      }
    );
  };

  closeMenu = () => {
    this.ref.current.focus();
    this.setState({
      isMenuOpen: false,
    });
    document.querySelector("body").classList.add("startScroll");
  };

  setActive = (arg) => {
    this.setState({
      activeLink: arg,
    });
  };

  render() {
    const { activeLink } = this.state;

    const navLinks = (
      <>
        <Link
          to="/about"
          onClick={() => {
            this.closeMenu();
            this.setActive("/about");
          }}
          className={`link ${activeLink === "/about" ? "activeLink" : ""}`}
        >
          About
        </Link>
        <a
          href="https://drive.google.com/file/d/1sth6BX8d86KQ27_3X-HshQFlu26TbGX3/view?usp=sharing"
          target="_blank"
          className="link"
          onClick={() => {
            this.closeMenu();
          }}
        >
          Resume
        </a>
        <a
          href="mailto:hbarlar1@gmail.com"
          target="_top"
          className="link"
          target="_blank"
        >
          Contact
        </a>
      </>
    );

    return (
      <nav className="navbar">
        <Link
          to="/"
          className="logo"
          onClick={() => this.setState({ activeLink: "" })}
        >
          <img src="./blindContour.png" alt="Haley Barlar logo" />
        </Link>
        <div className="desktop">{navLinks}</div>
        <button onClick={this.isMenuOpen} className="hamburger-button">
          {this.state.isMenuOpen ? (
            <i class="material-icons" ref={this.ref}>
              close
            </i>
          ) : (
            <i class="material-icons" ref={this.ref}>
              view_headline
            </i>
          )}
        </button>
        {this.state.isMenuOpen && <HomemadeBurger navLinks={navLinks} />}
      </nav>
    );
  }
}

export default Navbar;
