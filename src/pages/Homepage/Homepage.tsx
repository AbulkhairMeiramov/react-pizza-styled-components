import { styled } from "styled-components";
import PizzaGrid from "../../components/PizzaGrid/PizzaGrid";
import PizzaSort from "../../components/PizzaSort/PizzaSort";
import PizzaTypeMenu from "../../components/PizzaTypeMenu/PizzaTypeMenu";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const StyledTopMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Homepage: React.FC = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <>
      <StyledTopMenuContainer>
        <PizzaTypeMenu />
        <PizzaSort />
      </StyledTopMenuContainer>
      <PizzaGrid />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default Homepage;
