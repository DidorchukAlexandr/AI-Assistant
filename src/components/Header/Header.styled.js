import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: blue;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const WrapNav = styled.div`
  margin-left: auto;
`;
