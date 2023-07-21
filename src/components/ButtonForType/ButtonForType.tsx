import { styled } from "styled-components";

type ButtonForTypeProps = {
  children: React.ReactNode;
  width: string;
  height: string;
  active: boolean;
};

export interface StyledButtonForTypeProps {
  width: string;
  height: string;
  active: boolean;
}

const StyledButtonForType = styled.div<StyledButtonForTypeProps>`
  width: ${({ width }) => width || "30px"};
  height: ${({ height }) => height || "30px"};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  ${(props) =>
    props.active &&
    `
    background-color: #fefefe;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.04); 
  `};
`;

const ButtonForType: React.FC<ButtonForTypeProps> = ({
  children,
  width,
  height,
  active,
}) => {
  return (
    <StyledButtonForType width={width} height={height} active={active}>
      {children}
    </StyledButtonForType>
  );
};

export default ButtonForType;
