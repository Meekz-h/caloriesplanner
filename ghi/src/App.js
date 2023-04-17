import { useEffect, useState } from 'react';
import ErrorNotification from './ErrorNotification';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/navigation/Nav.js';
import MainPage from './components/mainpage/MainPage.js';
import AboutUs from './components/mainpage/AboutUs';
import Footer from './components/navigation/Footer.js'
import LogIn from './components/authorization/LogIn';
import SignUp from './components/authorization/SignUp';
import AuthMainPage from './components/mainpage/AuthMainPage';
import { useGetAccountQuery } from './services/Entries';



function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
      console.log('fastapi url: ', url);
      let response = await fetch(url);
      console.log("------- hello? -------");
      let data = await response.json();

      if (response.ok) {
        console.log("got launch data!");
        setLaunchInfo(data.launch_details);
      } else {
        console.log("drat! something happened");
        setError(data.message);
      }
    }
    getData();
  }, [])


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
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
