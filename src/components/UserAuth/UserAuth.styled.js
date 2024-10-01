import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  margin-right: 10px;
  padding: 10px;
  &.active {
    color: black;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ChatLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  margin-right: 40px;
  padding: 10px;
  &.active {
    color: black;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  color: white;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
`;

export const Image = styled.img`
  width: 44px;
  height: 44px;
  margin-left: 15px;
`;

export const Btn = styled.button`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin-left: 5px;
  border: none;
  background: blue;
  cursor: pointer;
  color: white;
  padding: 10px;

  :hover,
  :focus {
    color: black;
    border: 1px solid;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
