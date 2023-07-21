import { styled } from "styled-components";

type SubtitleProps = {
  children: React.ReactNode;
};

const StyledSubtitle = styled.p`
  color: #7b7b7b;
  font-size: 16px;
`;

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <StyledSubtitle>{children}</StyledSubtitle>;
};

export default Subtitle;
