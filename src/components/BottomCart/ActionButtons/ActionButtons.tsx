import { styled } from "styled-components";
import Button from "../../UI/Button/Button";
import LinkBase from "../../UI/LinkBase/LinkBase";

const StyledActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionButtons: React.FC = () => {
  return (
    <StyledActionButtons>
      <LinkBase to="/">
        <Button onClick={() => {}} height="40px" width="200px">
          Вернуться назад
        </Button>
      </LinkBase>
      <Button onClick={() => {}} height="40px" width="200px">
        Оплатить сейчас
      </Button>
    </StyledActionButtons>
  );
};

export default ActionButtons;
