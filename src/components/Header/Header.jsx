import React from "react";
import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/auth/auth-selectors";
import UserAuth from "../../components/UserAuth/UserAuth";
import AuthLink from "../../components/AuthLink/AuthLink";

import { Wrap, WrapNav, Title } from "./Header.styled";

const Header = () => {

const isLogin = useSelector(isUserLogin);

    return (
        
            <Wrap>
                <Title>AI Assistant</Title>
                <WrapNav>
                    {!isLogin && <AuthLink />}
                    {isLogin && <UserAuth />}
                </WrapNav>
            </Wrap>
            
        
        
    )
}

export default Header;