import { styled } from "styled-components";
import CartList from "../../components/CartList/CartList";
import CartTitle from "../../components/CartTitleContainer/CartTitle/CartTitle";
import CartTitleContainer from "../../components/CartTitleContainer/CartTitleContainer";
import { BsFillCartFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";

const StyledCartPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  padding: 10% 20%;
`;

const CartPage: React.FC = () => {
  return (
    <StyledCartPage>
      <CartTitleContainer>
        <CartTitle
          icon={<BsFillCartFill />}
          fontSize="32px"
          fontWeight="600"
          color="#000"
          justifyContent="center"
          alignItems="center"
          cursor="default"
        >
          Корзина
        </CartTitle>
        <CartTitle
          icon={<AiTwotoneDelete />}
          fontSize="18px"
          fontWeight="500"
          color="#b6b6b6"
          cursor="pointer"
          hoverColor="#989898"
          justifyContent="center"
          alignItems="center"
          lineHeight="30px"
        >
          Очистить корзину
        </CartTitle>
      </CartTitleContainer>
      <CartList />
    </StyledCartPage>
  );
};

export default CartPage;
