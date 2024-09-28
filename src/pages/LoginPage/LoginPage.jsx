import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import { Title, Wrap } from "./LoginPage.styled";
const LoginPage = () => {
    return (
        <Container>
             
            <Header />
            <Wrap>
                <Title>Login Page</Title>
           </Wrap>
        
       </Container>
    )
}

export default LoginPage;