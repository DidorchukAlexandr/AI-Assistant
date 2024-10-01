import styled from "styled-components";
import { ReactComponent as GoogleLogo } from "../../images/logo-google-icon.svg";
export const GoogleAuth = styled(GoogleLogo)`
  width: 45px;
  height: 45px;
`;

export const GoogleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 96%;
  height: 56px;
  border: none;
  border-radius: 6px;
  background: white;
  margin-top: 7px;
  padding-left: 5px;
  cursor: pointer;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  line-height: 1.12;
  color: #fafafa;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #22252a;
  }
  @media screen and (min-width: 768px) {
    height: 56px;
  }
  @media screen and (min-width: 1440px) {
    height: 59px;
  }
`;
