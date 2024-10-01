

import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import AIassistant from "../../images/AIassistant.jpg";
import { Image, Wrap } from "./NavBar.styled";

const NavBar = () => {
    return (
        <Container>
            <Header />
           <Wrap>
                 <Image srcSet={AIassistant} />
           </Wrap>    
            
        </Container>
        
    )
}

export default NavBar;