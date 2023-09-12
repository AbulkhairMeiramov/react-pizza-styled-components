import styled from "styled-components";
import AuthorizationContainer from "../../components/AuthorizationContainer/AuthorizationContainer";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  height: auto;
`;

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (login: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login, password)
      .then(({ user }: any) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user"));
  };

  return (
    <StyledLoginPage>
      <AuthorizationContainer authType="LOGIN" handleClick={handleLogin} />
    </StyledLoginPage>
  );
};

export default LoginPage;
