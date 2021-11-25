import React, { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HomemadeBurger } from "./HomemadeBurger";
import styled from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 142px;
  width: 132px;
`;

const StyledBurgerButton = styled.button`
  border: none;
  background: none;
  position: relative;
  z-index: 2;
  padding: 0;

  i {
    font-size: 50px;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1080px) {
    display: none;
  }
`;

const DesktopNavLinks = styled.span`
  display: none;

  @media (min-width: 1080px) {
    display: flex;
    align-items: center;
    width: 228px;
    justify-content: space-between;
  }
`;

const StyledLink = styled(Link)`
  font-family: "Playfair Display", serif;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledATag = styled.a`
  font-family: "Playfair Display", serif;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Navbar: FC = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBarRef = useRef<null | HTMLButtonElement>(null);

  const closeMenu = () => {
    // navBarRef.current?.focus();
    setIsMenuOpen(false);
    // document.querySelector("body")?.classList.add("startScroll");
  };

  const navLinks = (
    <>
      <li>
        <StyledLink
          to="/about"
          onClick={() => {
            closeMenu();
            setActiveLink("/about");
          }}
          className={`link ${activeLink === "/about" ? "activeLink" : ""}`}
        >
          About
        </StyledLink>
      </li>
      <li>
        <StyledATag
          href="https://drive.google.com/file/d/1VEn-GGqeMb6bBPuC7w_zgfNZqPsJwiSI/view?usp=sharing"
          target="_blank"
          className="link"
          onClick={() => {
            closeMenu();
          }}
        >
          Resume
        </StyledATag>
      </li>
      <li>
        <StyledATag
          href="mailto:hbarlar1@gmail.com"
          // target="_top"
          className="link"
          target="_blank"
        >
          Contact
        </StyledATag>
      </li>
    </>
  );

  return (
    <nav>
      <StyledNavList>
        <li>
          <StyledLink
            to="/"
            onClick={() => setActiveLink("")}
            aria-label="Home"
          >
            <StyledImage src="./blindContour.png" alt="Haley Barlar logo" />
          </StyledLink>
        </li>
        <DesktopNavLinks>{navLinks}</DesktopNavLinks>
        <StyledBurgerButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open navigation menu"
        >
          {isMenuOpen ? (
            <i className="material-icons" ref={navBarRef}>
              close
            </i>
          ) : (
            <i className="material-icons" ref={navBarRef}>
              view_headline
            </i>
          )}
        </StyledBurgerButton>
        {isMenuOpen && (
          <HomemadeBurger
            navLinks={navLinks}
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
          />
        )}
      </StyledNavList>
    </nav>
  );
};
