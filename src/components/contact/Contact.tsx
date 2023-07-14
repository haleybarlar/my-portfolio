import React from "react";
import {
  ContactWrapper,
  StyledLink,
  StyledContactType,
} from "./Contact.styles";

export const Contact = () => {
  return (
    <ContactWrapper>
      <ul>
        <li>
          <StyledContactType>Email:</StyledContactType> hbarlar1@gmail.com
        </li>
        <li>
          <StyledContactType>Github: </StyledContactType>
          <StyledLink href="https://github.com/haleybarlar">
            github.com/haleybarlar
          </StyledLink>
        </li>
        <li>
          <StyledContactType>LinkedIn: </StyledContactType>
          <StyledLink href="https://linkedin.com/in/haleybarlar">
            linkedin.com/in/haleybarlar
          </StyledLink>
        </li>
        <li>
          <StyledContactType>Twitter: </StyledContactType>
          <StyledLink href="https://twitter.com/haley_barlar">
            twitter.com/haley_barlar
          </StyledLink>
        </li>
      </ul>
    </ContactWrapper>
  );
};
