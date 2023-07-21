import { styled } from "styled-components";

type TitleProps = {
  children: React.ReactNode;
};

const StyledTitle = styled.h1`
  color: #181818;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 800;
`;

const Title: React.FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
