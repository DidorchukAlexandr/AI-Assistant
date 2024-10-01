import { useDispatch } from "react-redux";
 import { register } from "../../redux/auth/auth-operations";

 
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";

const RegistrationPage = () => {

    const dispatch = useDispatch();

    const onRegister = (data) => {
        dispatch(register(data));
    }
    
    return (
        <Container>
            <Header />
            <RegisterForm onSubmit={onRegister}/>
        </Container>
    )
}
export default RegistrationPage;