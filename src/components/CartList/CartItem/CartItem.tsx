import { styled } from "styled-components";
import CartItemImg from "./CartItemImg/CartItemImg";
import CartTitle from "../../CartTitleContainer/CartTitle/CartTitle";
import CartCount from "./CartCount/CartCount";
import { TiDelete } from "react-icons/ti";
import {
  CartPizzaItem,
  deletePizzaItem,
} from "../../../redux/slices/cartSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";

type CartItemProps = {
  cartData: CartPizzaItem;
};

const StyledCartItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5% 50% 15% 25% 5%;
  min-height: 100px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
`;

const StyledCartItemTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTiDelete = styled(TiDelete)`
  cursor: pointer;
  color: #b6b6b6;
  font-size: 35px;

  &:hover {
    color: #ea4040;
  }
`;

const CartItem: React.FC<CartItemProps> = ({ cartData }) => {
  const dispatch = useAppDispatch();

  const handleDeleteItem = (id: string) => {
    dispatch(deletePizzaItem(id));
  };

  console.log(cartData?.count);

  return (
    <StyledCartItem>
      <CartItemImg img={cartData?.imageUrl} />
      <StyledCartItemTitleContainer>
        <CartTitle
          color="#000"
          fontSize="22px"
          fontWeight="700"
          lineHeight="27px"
          justifyContent="center"
          alignItems="center"
        >
          {cartData?.title}
        </CartTitle>
        <CartTitle
          color="#8d8d8d"
          fontSize="18px"
          fontWeight="500"
          justifyContent="center"
          alignItems="center"
        >
          {cartData?.type}, {cartData?.size}см
        </CartTitle>
      </StyledCartItemTitleContainer>
      <CartCount cartData={cartData} handleDeleteItem={handleDeleteItem} />
      <CartTitle
        color="#000"
        fontSize="22px"
        fontWeight="700"
        justifyContent="center"
        alignItems="center"
      >
        {cartData?.price * cartData?.count}$
      </CartTitle>
      <StyledTiDelete onClick={() => handleDeleteItem(cartData?.id)} />
    </StyledCartItem>
  );
};

export default CartItem;
