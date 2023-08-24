import { styled } from "styled-components";
import PizzaGrid from "../../components/PizzaGrid/PizzaGrid";
import PizzaSort from "../../components/PizzaSort/PizzaSort";
import PizzaTypeMenu from "../../components/PizzaTypeMenu/PizzaTypeMenu";

const StyledTopMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Homepage: React.FC = () => {
  return (
    <>
      <StyledTopMenuContainer>
        <PizzaTypeMenu />
        <PizzaSort />
      </StyledTopMenuContainer>
      <PizzaGrid />
    </>
  );
};

export default Homepage;
