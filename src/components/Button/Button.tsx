import { css, keyframes, styled } from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  width: string;
  height: string;
  count: number;
  onClick: () => void;
  isClicked: boolean;
};

export interface StyledButtonProps {
  width: string;
  height: string;
  isClicked: boolean;
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

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* Adjust the jump height as needed */
  }
  100% {
    transform: translateY(0);
  }
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
  ${(props) =>
    props.isClicked &&
    css`
      animation: ${jumpAnimation} 0.5s ease-in-out forwards;
    `}
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

const Button: React.FC<ButtonProps> = ({
  children,
  width,
  height,
  count,
  onClick,
  isClicked,
}) => {
  return (
    <StyledButton
      isClicked={isClicked}
      width={width}
      height={height}
      onClick={onClick}
    >
      <Container>
        <div>{children}</div>
        {count !== 0 && <StyledAddCount>{count}</StyledAddCount>}
      </Container>
    </StyledButton>
  );
};

export default Button;
