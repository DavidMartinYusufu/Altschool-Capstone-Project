// import "./App.css";
import './index.css'
import { Routes, Route } from 'react-router-dom';

import HeroPage from './Components/HeroPage'
import LoginPage from './Components/loginPage';
import SignupPage from './Components/SignupPage';

function App() {
  return (
    <>   
      <Routes>
        <Route path='/'  element={<HeroPage />}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<SignupPage/>}/>
      </Routes>
    </>
  );
}

export default App;


