import { useEffect, useState } from 'react';
import ErrorNotification from './ErrorNotification';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/navigation/Nav.js';
import MainPage from './components/mainpage/MainPage.js';
import Footer from './components/navigation/Footer.js'
import LogIn from './components/authorization/LogIn';
import SignUp from './components/authorization/SignUp';

function App() {

  return (
    <BrowserRouter>
      <Nav  />
      <div>
          {/* <ErrorNotification error={error} /> */}
        <Routes>
          <Route path="/">
            <Route index element={<MainPage/>} />
            <Route path='login' element={<LogIn/>}/>
            <Route path='signup' element={<SignUp/>}/>
          </Route>

        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
