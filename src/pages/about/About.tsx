import * as React from "react";
import {
  AboutWrapper,
  StyledAboutImage,
  StyledDescription,
  StyledAboutTextWrapper,
  StyledDescriptionWrapper,
} from "./About.styles";
import { ScreenReaderOnly } from "../../helpers/HelperStyles";

export const About = () => {
  return (
    <>
      <ScreenReaderOnly as="h1">About</ScreenReaderOnly>
      <AboutWrapper>
        <StyledAboutImage
          src="./aboutImage.jpeg"
          alt="Haley stands in front of a brick wall with a small smile. She is wearing a black jacket and has long blonde hair."
        />
        <StyledAboutTextWrapper>
          <StyledDescriptionWrapper>
            <StyledDescription>
              I am a frontend engineer with a focus on accessibilty, UX, and
              design systems. I currently live in Atlanta, Georgia working as a
              software engineer for Vertis. My responsibilities vary, but I
              mostly handle creating reusable components, working end to end to
              build out new features, and QA testing.
            </StyledDescription>
            <StyledDescription>
              I work primarily with Typescript and React, and I'm a big fan of
              CSS. I have experience using both Styled Components and Tailwind,
              and while I have opinions on both, I believe they're both just
              tools used to reach the same outcome. Deciding on whether or not
              to focus on accessibility is what I care most about, and I always
              am in favor of doing what is best for the user.
            </StyledDescription>
            <StyledDescription>
              When I'm not working, I'm probably trail running, crying over cute
              dogs, or listening to Andrew Huberman talk about the importance of
              sunlight.
            </StyledDescription>
          </StyledDescriptionWrapper>
        </StyledAboutTextWrapper>
      </AboutWrapper>
    </>
  );
};
