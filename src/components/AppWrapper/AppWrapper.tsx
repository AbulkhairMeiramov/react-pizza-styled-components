import { styled } from "styled-components";

type AppWrapperProps = {
  children: React.ReactNode;
};

const StyledAppWrapper = styled.div`
  width: calc(100vw - 100px);
  margin: 50px auto;
  padding: 40px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  max-width: 1400px;
`;

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return <StyledAppWrapper>{children}</StyledAppWrapper>;
};

export default AppWrapper;
