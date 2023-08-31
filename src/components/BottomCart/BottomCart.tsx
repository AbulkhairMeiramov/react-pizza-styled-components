import { styled } from "styled-components";
import PizzaTotal from "./PizzaTotal/PizzaTotal";
import ActionButtons from "./ActionButtons/ActionButtons";

const StyledBottomCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const BottomCart: React.FC = () => {
  return (
    <StyledBottomCart>
      <PizzaTotal />
      <ActionButtons />
    </StyledBottomCart>
  );
};

export default BottomCart;
