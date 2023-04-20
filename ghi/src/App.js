import { useEffect, useState } from 'react';
import ErrorNotification from './ErrorNotification';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/navigation/Nav.js';
import MainPage from './components/mainpage/MainPage.js';
import Footer from './components/navigation/Footer.js'
import LogIn from './components/authorization/LogIn';
import SignUp from './components/authorization/SignUp';
import AuthMainPage from './components/mainpage/authcomponents/AuthMainPage';
import { useGetAccountQuery } from './services/Entries';
import AboutUs from './components/mainpage/AboutUs';
import LogAMeal from './components/meals/LogAMeal';
import ErrorMessage from './components/authorization/ErrorMessage';


function App() {
  const { data: account } = useGetAccountQuery();

  return (
    <BrowserRouter>
      <Nav />
      <div>
        {/* <ErrorNotification error={error} /> */}
        <Routes>
          <Route path="/">
            <Route
              index
              element={!account ? <MainPage /> : <AuthMainPage/>}
            />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="meals" element={!account ? <ErrorMessage /> : <LogAMeal/>} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
