import React from "react";
import { education, experienceContent, skills } from "./resumeContent";
import { ScreenReaderOnly } from "../../helpers/HelperStyles";
import {
  StyledListSectionWrapper,
  StyledDescription,
  StyledExperienceBullet,
  StyledName,
  StyledPositionTitle,
  StyledSectionHeader,
  StyledWhereAndWhen,
  StyledEducationProgram,
  StyledEducationWhereAndWhen,
  ResumeContainer,
  StyledLine,
  StyledExperienceColumn,
  StyledUL,
  StyledSecondColumn,
  StyledColumns,
} from "./Resume.styles";

export const Resume = () => {
  return (
    <ResumeContainer>
      <span>
        <ScreenReaderOnly>Resume</ScreenReaderOnly>
        <StyledName>Haley Barlar</StyledName>
        <StyledDescription>
          I’m a design-oriented UI engineer with a focus on acccessibility, user
          experience, and scalability.
        </StyledDescription>
        <StyledLine />
        <StyledColumns>
          <StyledExperienceColumn>
            <StyledSectionHeader>Experience</StyledSectionHeader>
            {experienceContent.map((experience) => (
              <span>
                <StyledPositionTitle>{experience.position}</StyledPositionTitle>
                <StyledWhereAndWhen>
                  {experience.whereAndWhen}
                </StyledWhereAndWhen>
                <StyledUL>
                  {experience.bulletPoints.map((point) => (
                    <StyledExperienceBullet>{point}</StyledExperienceBullet>
                  ))}
                </StyledUL>
              </span>
            ))}
          </StyledExperienceColumn>
          <StyledSecondColumn>
            <StyledListSectionWrapper>
              <StyledSectionHeader>Skills</StyledSectionHeader>
              {skills.map((skill) => (
                <p>{skill}</p>
              ))}
            </StyledListSectionWrapper>
            <span>
              <StyledSectionHeader>Education</StyledSectionHeader>
              {education.map((school) => (
                <span>
                  <StyledEducationProgram>
                    {school.program}
                  </StyledEducationProgram>
                  <StyledEducationWhereAndWhen>
                    {school.school}
                  </StyledEducationWhereAndWhen>
                  <StyledEducationWhereAndWhen>
                    {school.dates}
                  </StyledEducationWhereAndWhen>
                </span>
              ))}
            </span>
          </StyledSecondColumn>
        </StyledColumns>
      </span>
    </ResumeContainer>
  );
};
