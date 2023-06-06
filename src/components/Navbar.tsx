import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomemadeBurger from "./HomemadeBurger";
import { styled } from "styled-components";

const OrderedList = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 12px;
`;

const NavbarItem = styled.li``;

const RightLinks = styled.span`
  display: flex;
  gap: 8px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 48px;
`;

export const Navbar = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <OrderedList>
      <NavbarItem>
        <StyledLogoLink to="/">HALEYBARLAR</StyledLogoLink>
      </NavbarItem>
      <RightLinks>
        {screenSize.dynamicWidth > 720 ? (
          <>
            <NavbarItem>
              <StyledLink to="/">home</StyledLink>
            </NavbarItem>
            <NavbarItem>
              <StyledLink to="/about">about</StyledLink>
            </NavbarItem>
            <NavbarItem>
              <StyledLink to="/resume">resume</StyledLink>
            </NavbarItem>
            <NavbarItem>
              <StyledLink to="/contact">contact</StyledLink>
            </NavbarItem>
          </>
        ) : (
          <>Burger</>
        )}
      </RightLinks>
    </OrderedList>
  );
};

// class Navbar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isMenuOpen: false,
//       activeLink: "",
//     };

//     this.ref = React.createRef();
//   }

//   componentDidMount() {
//     this.setState({
//       activeLink: document.location.pathname,
//     });
//   }

//   isMenuOpen = () => {
//     this.setState(
//       {
//         isMenuOpen: !this.state.isMenuOpen,
//       },
//       () => {
//         const bodyClasses = document.querySelector("body").classList;

//         this.state.isMenuOpen
//           ? bodyClasses.add("stopScroll")
//           : bodyClasses.add("startScroll");
//       }
//     );
//   };

//   closeMenu = () => {
//     this.ref.current.focus();
//     this.setState({
//       isMenuOpen: false,
//     });
//     document.querySelector("body").classList.add("startScroll");
//   };

//   setActive = (arg) => {
//     this.setState({
//       activeLink: arg,
//     });
//   };

//   render() {
//     const { activeLink } = this.state;

//     const navLinks = (
//       <>
//         <Link
//           to="/about"
//           onClick={() => {
//             this.closeMenu();
//             this.setActive("/about");
//           }}
//           className={`link ${activeLink === "/about" ? "activeLink" : ""}`}
//         >
//           About
//         </Link>
//         <a
//           href="https://drive.google.com/file/d/1VEn-GGqeMb6bBPuC7w_zgfNZqPsJwiSI/view?usp=sharing"
//           target="_blank"
//           className="link"
//           onClick={() => {
//             this.closeMenu();
//           }}
//         >
//           Resume
//         </a>
//         <a
//           href="mailto:hbarlar1@gmail.com"
//           target="_top"
//           className="link"
//           // target="_blank"
//         >
//           Contact
//         </a>
//       </>
//     );

//     return (
//       <nav className="navbar">
//         <Link
//           to="/"
//           className="logo"
//           onClick={() => this.setState({ activeLink: "" })}
//         >
//           <img src="./blindContour.png" alt="Haley Barlar logo" />
//         </Link>
//         <div className="desktop">{navLinks}</div>
//         <button onClick={this.isMenuOpen} className="hamburger-button">
//           {this.state.isMenuOpen ? (
//             <i class="material-icons" ref={this.ref}>
//               close
//             </i>
//           ) : (
//             <i class="material-icons" ref={this.ref}>
//               view_headline
//             </i>
//           )}
//         </button>
//         {this.state.isMenuOpen && <HomemadeBurger navLinks={navLinks} />}
//       </nav>
//     );
//   }
// }

// export default Navbar;
