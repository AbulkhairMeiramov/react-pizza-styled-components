import { useAppSelector } from "./reduxHooks";

export const useAuth = () => {
  const { login, token, id } = useAppSelector((state) => state.userSlice);

  return {
    isAuth: !!login,
    login,
    token,
    id,
  };
};
