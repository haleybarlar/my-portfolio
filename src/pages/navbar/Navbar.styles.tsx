import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const OrderedList = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 12px;
  height: 100px;

  @media (max-width: 768px) {
    padding: 44px 12px;
    height: 50px;
  }
`;

export const RightLinks = styled.span`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    font-weight: bold;
    border-bottom: 3px solid #fa5f96;
  }

  &:hover:not(.active) {
    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;
  }
`;

export const StyledLogoLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 48px;

  @media (max-width: 768px) {
    display: none;
  }
`;
