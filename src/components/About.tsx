import React, { FC } from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 42px;

  @media(min-width: 1080px) {
    flex-direction: row;
  }
`;

const StyledImage = styled.img`
  height: 300px;
  width: 300px;
`;

const StyledParagraph = styled.p`
  margin-top: 8px;
  font-size: 24px;

  &:first-child {
    margin-top: 0;
  }

  @media(min-width: 1080px) {
    font-size: 18px;
  }
`;

export const About: FC = () => (
  <AboutContainer>
    <StyledImage
      src="./AboutPhoto.jpeg"
      alt="Haley Barlar in front of a brick wall"
    />
    <span>
      <StyledParagraph>
        I'm Haley, a frontend engineer with a strong focus on design and
        accessibility. My background is in Fiber Arts, and this is my strength
        in the tech world. I'm the person who cares about the one pixel
        difference, and I fully believe in collaboration between teams and
        departments to make designs come to life both visually and functionally.
        I immerse myself completely in my projects, and I do whatever it takes
        to see a new feature realised.
      </StyledParagraph>
      <StyledParagraph>
        I am proficient in JavaScript, React, TypeScript and CSS, and I have
        experience working with Next, Vue, Node, Ruby and Redux. I've found that
        I pick up languages and new concepts quickly, and I am constantly trying
        to grow my stack while also becoming more proficient in the areas I'm
        already familiar.
      </StyledParagraph>
      <StyledParagraph>
        In my free time I run, do yoga, eat good food and learn German.
      </StyledParagraph>
    </span>
  </AboutContainer>
);
