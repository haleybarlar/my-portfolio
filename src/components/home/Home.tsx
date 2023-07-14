import React from "react";
import {
  StyledDescription,
  StyledImage,
  StyledHomeContentWrapper,
  StyledIntroduction,
  StyledSubIntroduction,
  StyledIntroductionWrapper,
} from "./Home.styles";
import { ScreenReaderOnly } from "../../helpers/HelperStyles";

export const Home = () => {
  return (
    <span>
      <ScreenReaderOnly>Home</ScreenReaderOnly>
      <StyledHomeContentWrapper>
        <StyledIntroductionWrapper>
          <StyledIntroduction>Hey, I'm Haley Barlar.</StyledIntroduction>
          <StyledSubIntroduction>
            I'm a <span>Senior Software Engineer</span> at Vertis.
          </StyledSubIntroduction>
        </StyledIntroductionWrapper>
        <StyledImage
          src="./lineDrawing.png"
          alt="Black and white line drawing of Haley"
        />
        <StyledDescription>
          <p>
            I studied Fiber Arts at the Savannah College of Art and Design,
            spent four years abroad working as an English and yoga teacher, and
            eventually found my place in engineering. Creative coding massively
            appeals to me, and I enjoy spending my days learning, growing, and
            exploring.
          </p>
        </StyledDescription>
      </StyledHomeContentWrapper>
    </span>
  );
};
