import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import { Title, Wrap } from "../LoginPage/LoginPage.styled";
const MainPage = () => {
    return (
        <Container>
             
          <Header />
            <Wrap>
                <Title>Main Page</Title>
           </Wrap>
        
       </Container>
    )
}

export default MainPage;