import styled from "styled-components";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import LinkBase from "../UI/LinkBase/LinkBase";
import { useState } from "react";

type AuthorizationContainerProps = {
  authType: "LOGIN" | "REGISTER";
  handleClick: (login: string, password: string) => void;
};

const StyledAuthorizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #fe5f1e;
  border-radius: 20px;
  padding: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const AuthorizationContainer: React.FC<AuthorizationContainerProps> = ({
  authType,
  handleClick,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledAuthorizationContainer>
      <h2>{authType === "LOGIN" ? "Авторизация" : "Регистрация"}</h2>
      <FormContainer>
        <label>Логин</label>
        <Input
          inputData={login}
          inputType="text"
          setInputData={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLogin(e.target.value)
          }
        />
        <label>Пароль</label>
        <Input
          inputData={password}
          inputType="password"
          setInputData={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </FormContainer>
      <Button
        onClick={() => handleClick(login, password)}
        width={authType === "LOGIN" ? "150px" : "200px"}
      >
        {authType === "LOGIN" ? "Войти" : "Зарегистрироваться"}
      </Button>
      <LinkBase to={authType === "LOGIN" ? "/registration" : "/login"}>
        {authType === "LOGIN" ? "Нет аккаунта?" : "Есть аккаунт?"}
      </LinkBase>
    </StyledAuthorizationContainer>
  );
};

export default AuthorizationContainer;
