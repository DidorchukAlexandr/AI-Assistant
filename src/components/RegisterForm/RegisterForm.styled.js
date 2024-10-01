import styled from "styled-components";

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

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-left: 100px;
  }
`;

export const Form = styled.form`
  max-width: 450px;
  margin: 0 auto;
  background-color: #2a2c36;
  border-radius: 6px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const Btn = styled.button`
  display: block;
  margin: 0 auto;
  width: 96%;
  height: 56px;
  border: none;
  border-radius: 6px;
  background: white;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: black;
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
  margin-left: 218px;
  @media screen and (max-width: 768px) {
    margin-left: 165px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 145px;
  }
`;

export const Span2 = styled.span`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  color: #fafafa;
  margin-left: 133px;
`;
