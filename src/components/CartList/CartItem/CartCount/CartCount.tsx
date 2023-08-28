import { styled } from "styled-components";
import CartTitle from "../../../CartTitleContainer/CartTitle/CartTitle";

const StyledCartCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionOfCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fe5f1e;
  border-radius: 30px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  color: #fe5f1e;

  &:hover {
    color: #fff;
    background-color: #fe5f1e;
  }
`;

const CartCount: React.FC = () => {
  return (
    <StyledCartCount>
      <ActionOfCount>-</ActionOfCount>
      <CartTitle color="#000" fontSize="22px" fontWeight="700">
        2
      </CartTitle>
      <ActionOfCount>+</ActionOfCount>
    </StyledCartCount>
  );
};

export default CartCount;
