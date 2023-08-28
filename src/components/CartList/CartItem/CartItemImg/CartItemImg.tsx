import { styled } from "styled-components";

const StyledCartItemImg = styled.img`
  width: 50px;
  height: 50px;
`;

const CartItemImg: React.FC = () => {
  return <StyledCartItemImg />;
};

export default CartItemImg;
