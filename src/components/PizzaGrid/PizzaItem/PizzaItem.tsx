import { styled } from "styled-components";
import PizzaImg from "./PizzaImg/PizzaImg";
import PizzaTitle from "./PizzaTitle/PizzaTitle";
import { PizzaType } from "../../../redux/slices/pizzaSlice";
import PizzaTypeSelection from "./PizzaTypeSelection/PizzaTypeSelection";
import Button from "../../Button/Button";
import PizzaPrice from "./PizzaPrice/PizzaPrice";
import { useState } from "react";

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
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleAdd = async () => {
    setCount((prev) => prev + 1);
    setIsClicked(true);
  };

  return (
    <StyledPizzaItem>
      <PizzaImg img={data.imageUrl} />
      <PizzaTitle title={data.title} />
      <PizzaTypeSelection data={data} />
      <SubmitContainer>
        <PizzaPrice price={data.price} />
        <Button
          onClick={handleAdd}
          count={count}
          width="130px"
          height="40px"
          isClicked={isClicked}
        >
          Добавить
        </Button>
      </SubmitContainer>
    </StyledPizzaItem>
  );
};

export default PizzaItem;
