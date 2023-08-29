import { styled } from "styled-components";
import CartItem from "./CartItem/CartItem";
import { useAppSelector } from "../../hooks/reduxHooks";

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
  const cart = useAppSelector((state) => state.cartSlice);

  return (
    <StyledCartList>
      {cart?.pizzaItems?.map((pizzaItem) => (
        <CartItem cartData={pizzaItem} key={pizzaItem?.id} />
      ))}
    </StyledCartList>
  );
};

export default CartList;
