import { styled } from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  width: string;
  height: string;
};

export interface StyledButtonProps {
  width: string;
  height: string;
}

const StyledAddCount = styled.div`
  min-width: 25px;
  min-height: 20px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fe5f1e;
  border-radius: 70%;
  color: #fff;
`;

const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ width }) => width || "30px"};
  height: ${({ height }) => height || "30px"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border: 2px solid #fe5f1e;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #fe5f1e;
  cursor: pointer;

  &:hover {
    background-color: #fe5f1e;
    color: #fff;
    transition: background-color 0.3s, color 0.3s;

    ${StyledAddCount} {
      background-color: #fff;
      color: #fe5f1e;
      transition: background-color 0.3s, color 0.3s;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const Button: React.FC<ButtonProps> = ({ children, width, height }) => {
  return (
    <StyledButton width={width} height={height}>
      <Container>
        <div>{children}</div>
        <StyledAddCount>1</StyledAddCount>
      </Container>
    </StyledButton>
  );
};

export default Button;
