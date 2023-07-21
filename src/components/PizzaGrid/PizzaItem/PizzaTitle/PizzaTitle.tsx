import { styled } from "styled-components";

type PizzaTitleProps = {
  title: string;
};

const StyledPizzaTitle = styled.p`
  font-weight: 900;
  font-size: 18px;
`;

const PizzaTitle: React.FC<PizzaTitleProps> = ({ title }) => {
  return <StyledPizzaTitle>{title}</StyledPizzaTitle>;
};

export default PizzaTitle;
