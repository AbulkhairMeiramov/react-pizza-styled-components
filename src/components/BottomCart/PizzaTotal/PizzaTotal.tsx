import { styled } from "styled-components";
import { useAppSelector } from "../../../hooks/reduxHooks";

const StyledLeftSide = styled.div`
  display: flex;
  justify-content: space-between;
`;

type SpanProps = {
  color?: string;
};

const TotalInfoPizzas = styled.p`
  font-size: 22px;
`;

const Span = styled.span<SpanProps>`
  font-weight: 700;

  color: ${(props) => props.color || "#000"};
`;

const PizzaTotal: React.FC = () => {
  const cart = useAppSelector((state) => state.cartSlice);
  const totalCount = cart?.pizzaItems.reduce((sum, el) => {
    return el.count + sum;
  }, 0);

  return (
    <StyledLeftSide>
      <TotalInfoPizzas>
        Всего пицц: <Span>{totalCount} шт.</Span>
      </TotalInfoPizzas>
      <TotalInfoPizzas>
        Сумма заказа: <Span color="#fe5f1e">{cart?.totalPrice}$</Span>
      </TotalInfoPizzas>
    </StyledLeftSide>
  );
};

export default PizzaTotal;
