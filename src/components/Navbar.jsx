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
          to="/work"
          onClick={() => {
            this.closeMenu();
            this.setActive("/work");
          }}
          className={`link ${activeLink === "/work" ? "activeLink" : ""}`}
        >
          work
        </Link>
        <Link
          to="/about"
          onClick={() => {
            this.closeMenu();
            this.setActive("/about");
          }}
          className={`link ${activeLink === "/about" ? "activeLink" : ""}`}
        >
          about
        </Link>
        <a
          href="https://drive.google.com/file/d/1ycd6SHMXE-_OwuLs0sbITxal2XJrh6WB/view?usp=sharing"
          target="_blank"
          className="link"
          onClick={() => {
            this.closeMenu();
            this.setActive();
          }}
        >
          resume
        </a>
        <a
          href="mailto:hbarlar1@gmail.com"
          target="_top"
          className="link"
          target="_blank"
        >
          contact
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
          hb
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
