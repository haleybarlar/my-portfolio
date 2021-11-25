import React, { FC, useEffect } from "react";
import styled from "styled-components";

interface HomemadeBurgerProps {
  isMenuOpen: boolean;
  navLinks: any;
  closeMenu: any;
}

const BurgerContainer = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  position: absolute;
  z-index: 1;
  padding-top: 10rem;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;

  a {
    text-decoration: none;
    color: black;
    font-size: 1.8rem;
  }

  p {
    color: black;
    font-size: 1.8rem;
    display: inline;
  }
`;

export const HomemadeBurger: FC<HomemadeBurgerProps> = ({
  navLinks,
  closeMenu,
}) => {
  useEffect(() => {
    document.addEventListener("keydown", onEscape);
  }, []);

  const onEscape = (e: any) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  };

  return <BurgerContainer>{navLinks}</BurgerContainer>;
};
