import { styled } from "styled-components";

type CartCountProps = {
  children: React.ReactNode;
};

const StyledCartCount = styled.div`
  p {
    font-size: 16px;
    font-weight: 600;
  }
`;

const CartCount: React.FC<CartCountProps> = ({ children }) => {
  return (
    <StyledCartCount>
      <p>{children}</p>
    </StyledCartCount>
  );
};

export default CartCount;
