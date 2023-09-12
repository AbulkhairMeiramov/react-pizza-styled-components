import { styled } from "styled-components";
import Logo from "./Logo/Logo";
import Cart from "./Cart/Cart";
import LinkBase from "../UI/LinkBase/LinkBase";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LinkBase to="/">
        <Logo />
      </LinkBase>
      <LinkBase to="/cart">
        <Cart />
      </LinkBase>
    </HeaderWrapper>
  );
};

export default Header;
