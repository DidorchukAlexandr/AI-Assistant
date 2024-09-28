import useForm from "../../services/hooks/useForm";
import TextField from "../TextField/TextField";
import initialState from "./initialState";
import fields from "./fields";
import { WrapForm, Title, Form, Btn, GoogleLink, GoogleAuth, Span, Span2 } from "./RegisterForm.styled";
import Header from "../Header/Header";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
     const { name, email, password } = state;
    return (
        <>
            <Header />
      <WrapForm>
          <Form onSubmit={handleSubmit}>
              <Title>Registration</Title>
                  <TextField
                      value={name}
                      onChange={handleChange}
                      {...fields.name} />
                  <TextField
                      value={email}
                      onChange={handleChange}
                      {...fields.email} />
                  <TextField
                      value={password}
                      onChange={handleChange}
                      {...fields.password} />
                 {/* <TextField
                      value={duplicate}
                      onChange={handleChange}
                      {...fields.duplicate} />      */}
              <Btn type="submit">Sign up</Btn>
              <Span>or</Span>
              <GoogleLink to="#">
                  <GoogleAuth />
                  <Span2>Sign up</Span2>
              </GoogleLink>
      </Form>
            </WrapForm>
            </>
  );
};

export default RegisterForm;