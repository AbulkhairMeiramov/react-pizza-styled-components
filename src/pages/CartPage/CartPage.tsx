import { styled } from "styled-components";
import CartList from "../../components/CartList/CartList";
import CartTitle from "../../components/CartTitleContainer/CartTitle/CartTitle";
import CartTitleContainer from "../../components/CartTitleContainer/CartTitleContainer";
import { BsFillCartFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { clearCart } from "../../redux/slices/cartSlice";
import { CartEmpty } from "../../components/CartEmpty/CartEmpty";
import BottomCart from "../../components/BottomCart/BottomCart";

const StyledCartPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  padding: 10% 20%;
`;

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartSlice.pizzaItems);

  return (
    <StyledCartPage>
      {!!cart?.length ? (
        <>
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
              onClick={() => dispatch(clearCart())}
            >
              Очистить корзину
            </CartTitle>
          </CartTitleContainer>
          <CartList />
          <BottomCart />
        </>
      ) : (
        <CartTitleContainer>
          <CartEmpty />
        </CartTitleContainer>
      )}
    </StyledCartPage>
  );
};

export default CartPage;
