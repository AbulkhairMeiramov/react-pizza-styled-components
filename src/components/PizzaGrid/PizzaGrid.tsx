import { styled } from "styled-components";
import PizzaItem from "./PizzaItem/PizzaItem";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { getPizzas } from "../../redux/slices/pizzaSlice";

const StyledPizzaGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

const PizzaGrid: React.FC = () => {
  const pizzas = useAppSelector((state) => state.pizzaSlice.pizzas);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <StyledPizzaGrid>
      {pizzas.map((pizza) => (
        <PizzaItem data={pizza} />
      ))}
    </StyledPizzaGrid>
  );
};

export default PizzaGrid;
