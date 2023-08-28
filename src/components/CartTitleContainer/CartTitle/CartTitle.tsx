import { styled } from "styled-components";

type CartTitleProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  fontSize: string;
  fontWeight: string;
  lineHeight?: string;
  justifyContent?: string;
  alignItems?: string;
  color: string;
  hoverColor?: string;
  cursor?: string;
};

type StyledCartTitleProps = {
  fontSize: string;
  fontWeight: string;
  lineHeight?: string;
  justifyContent?: string;
  alignItems?: string;
  color: string;
  hoverColor?: string;
  cursor?: string;
};

const StyledCartTitle = styled.h2<StyledCartTitleProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "30px")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "stretch"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "stretch")};
  color: ${(props) => (props.color ? props.color : "#000")};
  cursor: ${(props) => (props.cursor ? `${props.cursor}` : `default`)};

  ${(props) =>
    props.hoverColor &&
    `
    &:hover {
      color: ${props.hoverColor}
    }
  `}

  display: flex;
  gap: 5px;
`;

const CartTitle: React.FC<CartTitleProps> = ({
  children,
  icon,
  fontSize,
  fontWeight,
  lineHeight,
  justifyContent,
  alignItems,
  color,
  hoverColor,
  cursor,
}) => {
  return (
    <StyledCartTitle
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      justifyContent={justifyContent}
      alignItems={alignItems}
      color={color}
      hoverColor={hoverColor}
      cursor={cursor}
    >
      {icon}
      {children}
    </StyledCartTitle>
  );
};

export default CartTitle;
