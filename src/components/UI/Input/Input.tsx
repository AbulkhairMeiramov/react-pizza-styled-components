import styled from "styled-components";

type InputProps = {
  inputData: string;
  inputType: string;
  setInputData: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 5px;
  width: 150px;
  border-color: #fe5f1e;
`;

const Input: React.FC<InputProps> = ({
  inputData,
  inputType,
  setInputData,
}) => {
  return (
    <StyledInput type={inputType} value={inputData} onChange={setInputData} />
  );
};

export default Input;
