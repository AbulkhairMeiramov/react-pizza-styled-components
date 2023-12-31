import { styled } from "styled-components";
import CartPrice from "./CartPrice/CartPrice";
import CartCount from "./CartCount/CartCount";
import { BsCart2 } from "react-icons/bs";
import { useAppSelector } from "../../../hooks/reduxHooks";

const StyledCart = styled.div`
  min-width: 130px;
  background-color: #fe5f1e;
  color: #fff;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 12px 10px;
  text-align: center;
  cursor: pointer;
`;

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cartSlice);
  const totalCount = cart?.pizzaItems.reduce((sum, el) => {
    return el.count + sum;
  }, 0);

  return (
    <StyledCart>
      <BsCart2 />
      <CartPrice>{cart?.totalPrice} $</CartPrice>
      <div
        style={{
          width: "1px",
          height: "25px",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
        }}
      ></div>
      <CartCount>{totalCount}</CartCount>
    </StyledCart>
  );
};

export default Cart;
