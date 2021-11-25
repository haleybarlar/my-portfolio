import React, { FC } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 100px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const StyledLink = styled.a`
  font-size: 20px;
  margin-right: 20px;
  color: black;

  &:last-child {
    margin-right: 0;
  }
`;

export const Footer: FC = () => (
  <FooterContainer>
    <StyledLink
      href="https://github.com/haleybarlar"
      target="_blank"
      aria-label="github"
    >
      <i className="fa fa-github" />
    </StyledLink>
    <StyledLink
      href="https://www.linkedin.com/in/haleybarlar/"
      target="_blank"
      aria-label="linkedIn"
    >
      <i className="fa fa-linkedin" />
    </StyledLink>
    <StyledLink
      href="https://www.behance.net/haleybarlar"
      target="_blank"
      aria-label="behance"
    >
      <i className="fa fa-behance" />
    </StyledLink>
    <StyledLink
      href="https://twitter.com/haley_barlar"
      target="_blank"
      aria-label="twitter"
    >
      <i className="fa fa-twitter" />
    </StyledLink>
  </FooterContainer>
);
