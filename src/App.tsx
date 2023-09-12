import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import CartPage from "./pages/CartPage/CartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
