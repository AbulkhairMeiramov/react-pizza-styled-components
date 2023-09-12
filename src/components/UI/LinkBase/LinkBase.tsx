import { Link } from "react-router-dom";
import { styled } from "styled-components";

type LinkBaseProps = {
  children: React.ReactNode;
  to: string;
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LinkBase: React.FC<LinkBaseProps> = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default LinkBase;
