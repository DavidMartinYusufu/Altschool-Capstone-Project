import "./index.css";
import { Routes, Route } from "react-router-dom";

import HeroPage from "./Components/HeroPage";
import LoginPage from "./Components/loginPage";
import SignupPage from "./Components/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HeroPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signUp" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
