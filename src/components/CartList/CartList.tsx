import { styled } from "styled-components";

const StyledCartList = styled.div`
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
      <div>Cart</div>
      <div>Cart</div>
      <div>Cart</div>
    </StyledCartList>
  );
};

export default CartList;
