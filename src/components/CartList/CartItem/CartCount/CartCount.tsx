import { styled } from "styled-components";
import CartTitle from "../../../CartTitleContainer/CartTitle/CartTitle";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import {
  CartPizzaItem,
  addPizzaItem,
  minusPizzaItem,
} from "../../../../redux/slices/cartSlice";

type CartCountProps = {
  cartData: CartPizzaItem;
  handleDeleteItem: (id: string) => void;
};

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

const CartCount: React.FC<CartCountProps> = ({
  cartData,
  handleDeleteItem,
}) => {
  const dispatch = useAppDispatch();

  const handleAddCount = () => {
    dispatch(
      addPizzaItem({
        id: cartData?.id,
        title: cartData?.title,
        price: cartData?.price,
        imageUrl: cartData?.imageUrl,
        type: cartData?.type,
        size: cartData?.size,
        count: cartData?.count,
      })
    );
  };

  const handleMinusCount = () => {
    dispatch(minusPizzaItem(cartData?.id));
  };

  return (
    <StyledCartCount>
      <ActionOfCount
        onClick={() => {
          if (cartData?.count <= 1) {
            handleDeleteItem(cartData?.id);
          }
          handleMinusCount();
        }}
      >
        -
      </ActionOfCount>
      <CartTitle color="#000" fontSize="22px" fontWeight="700">
        {cartData.count}
      </CartTitle>
      <ActionOfCount onClick={() => handleAddCount()}>+</ActionOfCount>
    </StyledCartCount>
  );
};

export default CartCount;
