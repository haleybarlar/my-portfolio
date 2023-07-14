import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 44px 12px;

  @media (max-width: 768px) {
    padding: 44px 12px;
    height: fit-content;
  }
`;

export const StyledLink = styled.a`
  color: black;

  &:hover {
    color: grey;
  }

  i {
    font-size: 28px;
  }
`;
