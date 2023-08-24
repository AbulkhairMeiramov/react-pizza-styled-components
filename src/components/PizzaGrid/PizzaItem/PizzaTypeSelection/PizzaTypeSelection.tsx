import { styled } from "styled-components";
import ButtonForType from "../../../ButtonForType/ButtonForType";
import { PizzaType } from "../../../../redux/slices/pizzaSlice";
import { PIZZA_TYPE } from "../../../../variables/constants";
import { useState } from "react";

type PizzaTypeSelectionProps = {
  data: PizzaType;
};

const StyledPizzaTypeSelection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  border-radius: 5px;
`;

const StyledPizzaTypeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`;

const PizzaTypeSelection: React.FC<PizzaTypeSelectionProps> = ({ data }) => {
  const [activePizzaType, setActivePizzaType] = useState(0);
  const [activePizzaSize, setActivePizzaSize] = useState(0);

  return (
    <StyledPizzaTypeSelection>
      <StyledPizzaTypeContainer>
        {data?.types.map((type) => (
          <ButtonForType
            width="100px"
            height="30px"
            active={activePizzaType === type}
            key={type}
            onClick={() => setActivePizzaType(type)}
          >
            {PIZZA_TYPE[type]}
          </ButtonForType>
        ))}
      </StyledPizzaTypeContainer>
      <StyledPizzaTypeContainer>
        {data?.sizes.map((size, index) => (
          <ButtonForType
            width="100px"
            height="30px"
            active={activePizzaSize === index}
            key={index}
            onClick={() => setActivePizzaSize(index)}
          >
            {size} см
          </ButtonForType>
        ))}
      </StyledPizzaTypeContainer>
    </StyledPizzaTypeSelection>
  );
};

export default PizzaTypeSelection;
