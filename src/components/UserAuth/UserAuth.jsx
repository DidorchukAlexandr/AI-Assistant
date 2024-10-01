import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";
import headerIcon from "../../images/headerIcon.png";

import { ImageWrap, Image, ChatLink, Btn, Wrap, HomeLink, LinkWrap } from "./UserAuth.styled";

const UserAuth = () => {
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrap>
      <LinkWrap>
      <HomeLink to="/main">Home</HomeLink>
        <ChatLink to="/chat">Chat</ChatLink>
        </LinkWrap>
      <ImageWrap>
        {name}
        <Image src={headerIcon} />
          <Btn onClick={onLogout}>
              Logout
          </Btn>
        </ImageWrap>
    </Wrap>
  );
};

export default UserAuth;