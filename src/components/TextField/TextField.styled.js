import styled from "styled-components";

export const FormGroup = styled.div`
  display: grid;
  background-color: #2a2c36;
  width: 450px;
  gap: 10px;
  align-items: center;
  padding: 7px;
`;

export const Label = styled.label`
  color: white;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  padding-left: 10px;
`;

export const Input = styled.input`
  color: darkred;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  padding: 7px;
  border-radius: 6px;
  /* border: none; */
  outline: none;
`;
