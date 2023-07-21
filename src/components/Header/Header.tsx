import { styled } from "styled-components";
import Logo from "./Logo/Logo";
import Cart from "./Cart/Cart";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Cart />
    </HeaderWrapper>
  );
};

export default Header;
