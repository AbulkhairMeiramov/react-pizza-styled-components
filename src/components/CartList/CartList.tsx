import { styled } from "styled-components";
import CartItem from "./CartItem/CartItem";

const StyledCartList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  height: auto;
`;

const CartList: React.FC = () => {
  return (
    <StyledCartList>
      <CartItem />
    </StyledCartList>
  );
};

export default CartList;
