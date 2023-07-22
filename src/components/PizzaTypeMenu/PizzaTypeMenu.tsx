import { styled } from "styled-components";
import PizzaTypeItem from "./PizzaTypeItem/PizzaTypeItem";

const pizzaTypeMenuData = [
  { name: "Все", categoryId: 0 },
  {
    name: "Мясные",
    categoryId: 1,
  },
  {
    name: "Вегетариянская",
    categoryId: 2,
  },
  {
    name: "Гриль",
    categoryId: 3,
  },
  {
    name: "Острые",
    categoryId: 4,
  },
  {
    name: "Закрытые",
    categoryId: 5,
  },
];

const StyledPizzaTypeMenu = styled.div`
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const PizzaTypeMenu: React.FC = () => {
  return (
    <StyledPizzaTypeMenu>
      {pizzaTypeMenuData.map((el, index) => (
        <PizzaTypeItem key={index} data={el} index={index} />
      ))}
    </StyledPizzaTypeMenu>
  );
};

export default PizzaTypeMenu;
