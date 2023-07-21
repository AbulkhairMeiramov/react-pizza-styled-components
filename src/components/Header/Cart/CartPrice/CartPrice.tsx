import { styled } from "styled-components";

type CartPriceProps = {
  children: React.ReactNode;
};

const StyledCart = styled.div`
  p {
    font-size: 16px;
    font-weight: 600;
  }
`;

const CartPrice: React.FC<CartPriceProps> = ({ children }) => {
  return (
    <StyledCart>
      <p>{children}</p>
    </StyledCart>
  );
};

export default CartPrice;
