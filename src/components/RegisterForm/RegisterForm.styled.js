import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as GoogleLogo } from "../../images/logo-google-icon.svg";

export const WrapForm = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  color: white;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 32px;
  line-height: 1.5;
  margin-left: 130px;
`;

export const Form = styled.form`
  width: 450px;
  margin: 0 auto;
  background-color: #2a2c36;
  border-radius: 6px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Btn = styled.button`
  display: block;
  margin: 0 auto;
  width: 96%;
  height: 30px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    rgb(1, 73, 180),
    rgb(1, 73, 180) 52.5%,
    rgb(1, 73, 180) 100%
  );
  margin-top: 10px;
  margin-bottom: 10px;
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

export const GoogleAuth = styled(GoogleLogo)`
  width: 45px;
  height: 45px;
`;

export const GoogleLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 auto;
  width: 96%;
  height: 45px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    rgb(1, 73, 180),
    rgb(1, 73, 180) 52.5%,
    rgb(1, 73, 180) 100%
  );
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

export const Span = styled.span`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  color: #fafafa;
  margin-left: 210px;
`;

export const Span2 = styled.span`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  color: #fafafa;
  margin-left: 133px;
`;
