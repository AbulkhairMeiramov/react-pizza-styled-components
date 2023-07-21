import { styled } from "styled-components";
import CartPrice from "./CartPrice/CartPrice";
import CartCount from "./CartCount/CartCount";

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
  return (
    <StyledCart>
      <CartPrice>520 $</CartPrice>
      <div
        style={{
          width: "1px",
          height: "25px",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
        }}
      ></div>
      <CartCount>3</CartCount>
    </StyledCart>
  );
};

export default Cart;
