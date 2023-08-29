import { styled } from "styled-components";

type CartItemImgProps = {
  img: string;
};

const StyledCartItemImg = styled.img`
  width: 50px;
  height: 50px;
`;

const CartItemImg: React.FC<CartItemImgProps> = ({ img }) => {
  return <StyledCartItemImg src={img} />;
};

export default CartItemImg;
