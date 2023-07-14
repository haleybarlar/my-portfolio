import * as React from "react";
import { StyledFooter, StyledLink } from "./Footer.styles";

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
