import styled from "styled-components";
import AuthorizationContainer from "../../components/AuthorizationContainer/AuthorizationContainer";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const StyledRegistrationPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  height: auto;
`;

const RegistrationPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (login: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, login, password)
      .then(({ user }: any) => {
        dispatch(
          setUser({
            email: user.email,
            token: user?.accessToken,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <StyledRegistrationPage>
      <AuthorizationContainer
        authType="REGISTER"
        handleClick={handleRegister}
      />
    </StyledRegistrationPage>
  );
};

export default RegistrationPage;
