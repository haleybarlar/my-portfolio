import styled from "styled-components";

export const ResumeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledColumns = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const StyledLine = styled.div`
  width: 20px;
  height: 2px;
  background: #fa5f96;
  margin-top: 14px;
  margin-bottom: 30px;
`;

export const StyledName = styled.p`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const StyledDescription = styled.p`
  font-size: 18px;
`;

export const StyledExperienceColumn = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledUL = styled.ul`
  list-style: disc;
  padding-left: 12px;
`;

export const StyledSectionHeader = styled.h2`
  font-size: 26px;
  margin-bottom: 10px;
`;

export const StyledPositionTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const StyledWhereAndWhen = styled.p`
  font-size: 16px;
  color: #666666;
`;

export const StyledExperienceBullet = styled.li`
  font-size: 16px;
`;

export const StyledListSectionWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const StyledEducationProgram = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const StyledEducationWhereAndWhen = styled.p`
  font-size: 16px;
  color: #666666;
`;

export const StyledSecondColumn = styled.span`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
