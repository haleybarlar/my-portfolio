import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledAboutImage = styled.img`
  width: 50%;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledIntroduction = styled.p`
  font-size: 26px;
`;

export const StyledDescription = styled.p`
  font-size: 18px;
`;

export const StyledAboutTextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledDescriptionWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
