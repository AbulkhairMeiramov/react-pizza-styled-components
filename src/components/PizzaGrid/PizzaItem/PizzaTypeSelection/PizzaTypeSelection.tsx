import { styled } from "styled-components";
import ButtonForType from "../../../ButtonForType/ButtonForType";

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

const PizzaTypeSelection: React.FC = () => {
  return (
    <StyledPizzaTypeSelection>
      <StyledPizzaTypeContainer>
        <ButtonForType width="100px" height="30px" active={false}>
          тонкое
        </ButtonForType>
        <ButtonForType width="100px" height="30px" active={true}>
          традиционное
        </ButtonForType>
      </StyledPizzaTypeContainer>
      <StyledPizzaTypeContainer>
        <ButtonForType width="100px" height="30px" active={false}>
          26см
        </ButtonForType>
        <ButtonForType width="100px" height="30px" active={true}>
          30см
        </ButtonForType>
        <ButtonForType width="100px" height="30px" active={false}>
          40см
        </ButtonForType>
      </StyledPizzaTypeContainer>
    </StyledPizzaTypeSelection>
  );
};

export default PizzaTypeSelection;
