import { styled } from "styled-components";

export const StyledHomeContentWrapper = styled.span`
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledIntroductionWrapper = styled.span`
  max-width: 25%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 25%;
  max-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

export const StyledDescription = styled.span`
  width: 25%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledIntroduction = styled.p`
  font-size: 40px;
`;

export const StyledSubIntroduction = styled.p`
  font-size: 20px;
`;
