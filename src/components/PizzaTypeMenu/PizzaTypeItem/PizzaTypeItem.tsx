import { styled } from "styled-components";

type PizzaTypeItemProps = {
  data: { name: string };
};

const StyledPizzaTypeItem = styled.div`
  background-color: #e6e6e6;
  font-weight: 700;
  border-radius: 30px;
  padding: 13px 30px;
  cursor: pointer;
`;

const PizzaTypeItem: React.FC<PizzaTypeItemProps> = ({ data }) => {
  return <StyledPizzaTypeItem>{data.name}</StyledPizzaTypeItem>;
};

export default PizzaTypeItem;
