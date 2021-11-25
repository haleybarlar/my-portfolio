import React, { FC } from "react";
import styled from "styled-components";

const HomeContentContainer = styled.section`
  margin-top: 42px;
`;

const StyledHeader = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const StyledSubHead = styled.h2`
  font-size: 24px;
  margin-top: 4px;
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  margin-top: 28px;

  &:last-child {
    margin-top: 8px;
  }
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

export const Home: FC = () => (
  <HomeContentContainer>
    <StyledHeader>Hey, I’m Haley Barlar.</StyledHeader>
    <StyledSubHead>
      I’m a <BoldSpan>UI Engineer</BoldSpan> at SalesLoft.
    </StyledSubHead>
    <StyledParagraph>
      I studied Fiber Arts at the Savannah College of Art and Design, spent four
      years abroad working as an English and yoga teacher, and eventually found
      my place in engineering. Creative coding massively appeals to me, and I
      enjoy spending my days learning, growing, and exploring.
    </StyledParagraph>
    <StyledParagraph>
      <BoldSpan>I get excited about:</BoldSpan> Accessibility, React.js, HTML +
      CSS, SASS, Typescript, Javascript, Figma, Svelte, UX/UI, P5.js, and being
      a good person during code review
    </StyledParagraph>
  </HomeContentContainer>
);
