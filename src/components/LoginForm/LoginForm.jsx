import useForm from "../../services/hooks/useForm";
import TextField from "../TextField/TextField";
import initialState from "./initialState";
import fields from "./fields";
import { WrapForm, Title, Form, Btn, Span } from "./LoginForm.styled";
import GoogleSignUp from '../GoogleLogin/GoogleLogin';




const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
     const { email, password } = state;

    return (
        <>
      <WrapForm>
          <Form onSubmit={handleSubmit}>
                    <Title>Log In</Title>
                  <TextField
                      value={email}
                      onChange={handleChange}
                        {...fields.email} />
                  <TextField
                      value={password}
                      onChange={handleChange}
                        {...fields.password} />
              <Btn type="submit">Sign up</Btn>
                    <Span>or</Span>
                      <GoogleSignUp />
                        
      </Form>
            </WrapForm>
            </>
  );
};

export default LoginForm;