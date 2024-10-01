import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  margin-top: 50px;
  width: auto;
  @media screen and (max-width: 768px) {
    width: 450px;
    margin-top: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    margin-top: 20px;
  }
`;
