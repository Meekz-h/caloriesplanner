import { useEffect, useState } from 'react';
import ErrorNotification from './ErrorNotification';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav.js';
import MainPage from './components/mainpage/MainPage.js';
import Footer from './Footer';

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <div>
          {/* <ErrorNotification error={error} /> */}
        <Routes>
          <Route path="/">
            <Route index element={<MainPage/>} />

          </Route>


        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
