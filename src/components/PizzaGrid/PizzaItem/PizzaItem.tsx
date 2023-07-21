import { styled } from "styled-components";
import PizzaImg from "./PizzaImg/PizzaImg";
import PizzaTitle from "./PizzaTitle/PizzaTitle";
import { PizzaType } from "../../../redux/slices/pizzaSlice";
import PizzaTypeSelection from "./PizzaTypeSelection/PizzaTypeSelection";
import Button from "../../Button/Button";
import PizzaPrice from "./PizzaPrice/PizzaPrice";

type PizzaItemProps = {
  data: PizzaType;
};

const StyledPizzaItem = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 5px;
`;

const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PizzaItem: React.FC<PizzaItemProps> = ({ data }) => {
  return (
    <StyledPizzaItem>
      <PizzaImg img={data.imageUrl} />
      <PizzaTitle title={data.title} />
      <PizzaTypeSelection />
      <SubmitContainer>
        <PizzaPrice price={data.price} />
        <Button width="130px" height="40px">
          Добавить
        </Button>
      </SubmitContainer>
    </StyledPizzaItem>
  );
};

export default PizzaItem;
