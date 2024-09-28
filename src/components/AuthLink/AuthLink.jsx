import { Wrap, Reg, Log } from "./AuthLink.styled";

const AuthLink = () => {
  return (
    <Wrap>
      <Reg to="/register">Register</Reg>
      <Log to="/login">Log In</Log>
    </Wrap>
  );
};

export default AuthLink;