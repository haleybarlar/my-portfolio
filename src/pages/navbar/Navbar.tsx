import React from "react";
import {
  OrderedList,
  StyledLogoLink,
  RightLinks,
  StyledLink,
} from "./Navbar.styles";

export const Navbar = () => {
  return (
    <OrderedList>
      <li>
        <StyledLogoLink to="/">HALEYBARLAR</StyledLogoLink>
      </li>
      <RightLinks>
        <>
          <li>
            <StyledLink to="/">home</StyledLink>
          </li>
          /
          <li>
            <StyledLink to="/about">about</StyledLink>
          </li>
          /
          <li>
            <StyledLink to="/resume">resume</StyledLink>
          </li>
          /
          <li>
            <StyledLink to="/contact">contact</StyledLink>
          </li>
        </>
      </RightLinks>
    </OrderedList>
  );
};
