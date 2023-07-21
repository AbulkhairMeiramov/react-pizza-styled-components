import { styled } from "styled-components";
import PizzaTypeItem from "./PizzaTypeItem/PizzaTypeItem";

const pizzaTypeMenuData = [
  { name: "Все" },
  {
    name: "Мясные",
  },
  {
    name: "Вегетариянская",
  },
  {
    name: "Гриль",
  },
  {
    name: "Острые",
  },
  {
    name: "Закрытые",
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
        <PizzaTypeItem key={index} data={el} />
      ))}
    </StyledPizzaTypeMenu>
  );
};

export default PizzaTypeMenu;
