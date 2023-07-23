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
  const categoryId = useAppSelector((state) => state.pizzaSlice.categoryId);
  const activeSortType = useAppSelector(
    (state) => state.pizzaSlice.activeSortType
  );
  const dispatch = useAppDispatch();

  const categoryParam = categoryId > 0 ? `category=${categoryId}` : "";
  const sortBy =
    activeSortType.id === 0
      ? "rating"
      : activeSortType.id === 1
      ? "price"
      : activeSortType.id === 2
      ? "title"
      : "";

  useEffect(() => {
    dispatch(getPizzas({ category: categoryParam, sortBy: sortBy }));
  }, [dispatch, categoryParam, sortBy]);

  return (
    <StyledPizzaGrid>
      {pizzas.map((pizza) => (
        <PizzaItem data={pizza} key={pizza.id} />
      ))}
    </StyledPizzaGrid>
  );
};

export default PizzaGrid;
