import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 36px 0;
  border-top: 1px solid grey;
  width: 100%;
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const StyledLink = styled.a`
  color: black;

  &:hover {
    color: grey;
  }

  i {
    font-size: 28px;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink href="https://github.com/haleybarlar" aria-label="github">
        <i className="fa fa-github" />
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/haleybarlar/"
        aria-label="linkedIn"
      >
        <i className="fa fa-linkedin" />
      </StyledLink>
      <StyledLink
        href="https://www.behance.net/haleybarlar"
        aria-label="behance"
      >
        <i className="fa fa-behance" />
      </StyledLink>
      <StyledLink href="https://twitter.com/haley_barlar" aria-label="behance">
        <i className="fa fa-twitter" />
      </StyledLink>
    </StyledFooter>
  );
};
