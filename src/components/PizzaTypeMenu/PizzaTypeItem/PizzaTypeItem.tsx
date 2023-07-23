import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setCategoryId } from "../../../redux/slices/pizzaSlice";

type PizzaTypeItemProps = {
  data: { name: string; categoryId: number };
  index: number;
};

export interface StyledPizzaTypeItemProps {
  index: number;
  categoryId: number;
}

const StyledPizzaTypeItem = styled.div<StyledPizzaTypeItemProps>`
  background-color: #e6e6e6;
  font-weight: 700;
  border-radius: 30px;
  padding: 13px 30px;
  cursor: pointer;

  &:hover {
    background-color: #c3c3c3;
  }

  ${(props) =>
    props.index === props.categoryId &&
    `background-color: #fe5f1e;
    color: #fff;
    border: 1px solid #000;
    
    &:hover{
      background-color: #FF7526;
    }`}
`;

const PizzaTypeItem: React.FC<PizzaTypeItemProps> = ({ data, index }) => {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector((state) => state.pizzaSlice.categoryId);

  console.log(index);

  return (
    <StyledPizzaTypeItem
      onClick={() => dispatch(setCategoryId(data?.categoryId))}
      categoryId={categoryId}
      index={index}
    >
      {data.name}
    </StyledPizzaTypeItem>
  );
};

export default PizzaTypeItem;
