import { styled } from "styled-components";

type PizzaPriceProps = {
  price: number;
};

const StyledPizzaPrice = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
`;

const PizzaPrice: React.FC<PizzaPriceProps> = ({ price }) => {
  return <StyledPizzaPrice>от {price} $</StyledPizzaPrice>;
};

export default PizzaPrice;
