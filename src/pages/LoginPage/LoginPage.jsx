import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import Container from "../../components/Container/Container";
import LoginForm from "../../components/LoginForm/LoginForm";
import Header from "../../components/Header/Header";
const LoginPage = () => {
const dispatch = useDispatch();

    const onLogin = (data) => {
        dispatch(login(data));
    }

    return (
        <Container>
             <Header />
                <LoginForm onSubmit={onLogin}/>
       </Container>
    )
}

export default LoginPage;