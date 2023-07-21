import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/Header";
import AppWrapper from "./components/AppWrapper/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
