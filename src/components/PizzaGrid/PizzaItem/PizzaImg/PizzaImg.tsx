import { styled } from "styled-components";

type PizzaImgProps = {
  img: string;
};

const StyledPizzaImg = styled.img`
  width: 260px;
`;

const PizzaImg: React.FC<PizzaImgProps> = ({ img }) => {
  return <StyledPizzaImg src={img} />;
};

export default PizzaImg;
