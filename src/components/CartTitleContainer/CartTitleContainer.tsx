import { styled } from "styled-components";

type CartTitleContainerProps = {
  children: React.ReactNode;
};

const StyledCartTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const CartTitleContainer: React.FC<CartTitleContainerProps> = ({
  children,
}) => {
  return <StyledCartTitleContainer>{children}</StyledCartTitleContainer>;
};

export default CartTitleContainer;
