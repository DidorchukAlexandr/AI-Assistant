import { Field } from "formik";
import { Link } from "react-router-dom";
import { FiUnlock } from "react-icons/fi";
import styled, { css } from "styled-components";

import { ReactComponent as Success } from "../../images/icon-success.svg";
import { ReactComponent as Warning } from "../../images/icon-warning.svg";
import { ReactComponent as Error } from "../../images/icon-error.svg";
import { ReactComponent as User } from "../../images/icon-user-name.svg";
import { ReactComponent as Email } from "../../images/icon-email.svg";
import { ReactComponent as Password } from "../../images/icon-password.svg";
import { ReactComponent as GoogleLogo } from "../../images/logo-google-icon.svg";

export const GoogleLink = styled(Link)``;

export const SuccessIcon = styled(Success)`
  width: 18px;
  height: 18px;
  top: 14px;
  right: 10px;
  position: absolute;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10.5px;
    right: 10px;
  }
`;

export const WarningIcon = styled(Warning)`
  width: 18px;
  height: 18px;
  top: 14px;
  right: 10px;
  position: absolute;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10.5px;
    right: 10px;
  }
`;

export const ErrorIcon = styled(Error)`
  width: 18px;
  height: 18px;
  top: 14px;
  right: 10px;
  position: absolute;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10.5px;
    right: 10px;
  }
`;

export const UserIcon = styled(User)`
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 18px;
  width: 18px;
  opacity: 80%;
  top: 14px;
  left: 15px;
  fill: none;
  stroke: #fafafa;
  ${(props) =>
    props.$error &&
    css`
      fill: none;
      stroke: #e74a3b;
    `}
  ${(props) =>
    props.$success &&
    css`
      stroke: #3cbc81;
    `}
  ${(props) =>
    props.$warning &&
    css`
      stroke: #f6c23e;
    `}
  @media screen and (min-width: 768px) {
    height: 24px;
    width: 24px;
    top: 11.5px;
    left: 16px;
  }
  @media screen and (min-width: 1440px) {
    top: 10.5px;
  }
`;

export const EmailIcon = styled(Email)`
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 18px;
  width: 18px;
  opacity: 80%;
  top: 14px;
  left: 15px;
  fill: none;
  stroke: #fafafa;
  ${(props) =>
    props.$warning &&
    css`
      stroke: #f6c23e;
    `}
  ${(props) =>
    props.$error &&
    css`
      stroke: #e74a3b;
    `}
  ${(props) =>
    props.$success &&
    css`
      stroke: #3cbc81;
    `}
  @media screen and (min-width: 768px) {
    height: 24px;
    width: 24px;
    top: 11.5px;
    left: 16px;
  }
  @media screen and (min-width: 1440px) {
    top: 10.5px;
  }
`;

export const PasswordIcon = styled(Password)`
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 18px;
  width: 18px;
  opacity: 80%;
  top: 14px;
  left: 15px;
  fill: none;
  stroke: #fafafa;
  ${(props) =>
    props.$error &&
    css`
      fill: none;
      stroke: #e74a3b;
    `}
  ${(props) =>
    props.$success &&
    css`
      stroke: #3cbc81;
    `}
  ${(props) =>
    props.$warning &&
    css`
      stroke: #f6c23e;
    `}
  @media screen and (min-width: 768px) {
    height: 24px;
    width: 24px;
    top: 11.5px;
    left: 16px;
  }
  @media screen and (min-width: 1440px) {
    top: 10.5px;
  }
`;

export const PasswordIconLock = styled(FiUnlock)`
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 16px;
  width: 16px;
  opacity: 80%;
  top: 15px;
  left: 16px;
  fill: none;
  stroke: #fafafa;
  ${(props) =>
    props.$error &&
    css`
      stroke: #e74a3b;
      opacity: 80%;
    `}
  ${(props) =>
    props.$success &&
    css`
      stroke: #3cbc81;
      opacity: 80%;
    `}
  ${(props) =>
    props.$warning &&
    css`
      stroke: #f6c23e;
      opacity: 80%;
    `}
  @media screen and (min-width: 768px) {
    height: 22px;
    width: 22px;
    top: 11.5px;
    left: 17px;
  }
  @media screen and (min-width: 1440px) {
    top: 10.5px;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;

  /* width: 100vw; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  /* @media screen and (min-width: 768px) {
    padding: 0 20px 59px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 20px 122px;
    
  } */
`;
export const MainWrapper = styled.div`
  box-sizing: border-box;
`;

export const AuthFormBox = styled.div`
  box-sizing: border-box;
`;

export const GoogleAuth = styled(GoogleLogo)`
  position: absolute;
  width: 45px;
  height: 45px;
  top: 20px;
  right: 29px;
  animation: pulse 1s infinite;
  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.2, 1.2, 1.2);
      transform: scale3d(1.2, 1.2, 1.2);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    right: 50px;
    top: 26px;
  }
  @media screen and (min-width: 1440px) {
    top: 28px;
  }
`;

export const InnerBox = styled.div`
  display: block;
  box-sizing: border-box;
  position: relative;
  padding: 32px 28px 40px 28px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  width: 335px;
  max-height: 350px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    padding: 44px 50px;
    width: 500px;
    max-height: 481px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    max-height: 484px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 18px 0;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 24px;
  color: #fafafa;
  line-height: 1.16;
  letter-spacing: -0.02em;
  @media screen and (min-width: 768px) {
    margin: 0 0 32px 0;
    font-size: 28px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const InputFormBox = styled.div`
  display: grid;
  margin-bottom: 35px;
  width: 100%;
  ${(props) =>
    props.$gap &&
    css`
      margin-bottom: 25px;
    `}
  @media
    screen
    and
    (min-width: 768px) {
    margin-bottom: 50px;
    ${(props) =>
      props.$gap &&
      css`
        margin-bottom: 40px;
      `}
  }
  @media screen and (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 12px;
  ${(props) =>
    props.$gap &&
    css`
      margin-bottom: 0;
    `}
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    ${(props) =>
      props.$gap &&
      css`
        margin-bottom: 0;
      `}
  }
`;

export const Input = styled(Field)`
  position: relative;
  box-sizing: border-box;
  background-color: initial;
  padding: 12px 16px 12px 40px;
  width: 100%;
  height: 45px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  /* border-opacity: 0.3; */
  border-radius: 6px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.8;
  outline: none;

  letter-spacing: -0.02em;
  color: #fafafa;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${(props) =>
    props.$error &&
    css`
      border-color: #e74a3b;
    `}
  ${(props) =>
    props.$success &&
    css`
      border-color: #3cbc81;
    `}
  /* ${(props) =>
    props.$warning &&
    css`
      border-color: #f6c23e;
    `} */
  :-webkit-autofill,
  :-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  [data-autocompleted] {
    background-color: transparent !important;
  }
  :hover,
  :focus {
    border: 1px solid #ffffff;
    border-radius: 6px;
    ${(props) =>
      props.$error &&
      css`
        border-color: #e74a3b;
      `}
    ${(props) =>
      props.$success &&
      css`
        border-color: #3cbc81;
      `}
    ${(props) =>
      props.$warning &&
      css`
        border-color: #f6c23e;
      `}
  }
  ::placeholder {
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 16px 16px 16px 50px;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 6px;
  background-color: #8baa36;
  cursor: pointer;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
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

export const LinkStyled = styled(Link)`
  margin: 18px 0 0 0;
  font-family: "Poppins";
  font-size: 14px;
  line-height: 1.5;
  color: #fafafa;
  text-align: center;
  display: block;
  cursor: pointer;
  text-decoration: underline;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #8baa36;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 619px;
  }
`;

export const SecureEntry = styled.button`
  position: absolute;
  top: 12px;
  right: 20px;
  ${(props) =>
    props.$secure &&
    css`
      top: 13px;
      right: 38px;
      @media screen and (min-width: 768px) {
        right: 44px;
      }
    `}
  outline: none;
  background: transparent;
  border: 1px solid transparent;

  font-family: "Poppins";
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  opacity: 0.8;
  outline: none;

  letter-spacing: -0.02em;
  color: #fafafa;
  :hover {
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
