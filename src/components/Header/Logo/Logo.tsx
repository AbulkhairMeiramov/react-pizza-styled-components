import { styled } from "styled-components";
import pizzaLogo from "../Logo/img/pizza-logo.svg";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";

const StyledLogo = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledLogoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <StyledImageDiv>
        <StyledImage src={pizzaLogo} />
      </StyledImageDiv>
      <StyledLogoContent>
        <Title>React Pizza</Title>
        <Subtitle>самая вкусная пицца во вселенной</Subtitle>
      </StyledLogoContent>
    </StyledLogo>
  );
};

export default Logo;
