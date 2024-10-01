import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
`;

export const Reg = styled(NavLink)`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  color: white;
  text-decoration: none;

  &.active {
    color: black;
  }
`;

export const Log = styled(NavLink)`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  margin-left: 20px;

  &.active {
    color: black;
  }
`;
