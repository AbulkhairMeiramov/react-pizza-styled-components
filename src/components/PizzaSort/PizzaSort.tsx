import { styled } from "styled-components";
import PizzaSortType from "./PizzaSortType/PizzaSortType";
import { sortTypes } from "../../variables/constants";

const StyledPizzaSort = styled.div`
  position: relative;
`;

const PizzaSort: React.FC = () => {
  return (
    <StyledPizzaSort>
      <PizzaSortType sortTypes={sortTypes} />
    </StyledPizzaSort>
  );
};

export default PizzaSort;
