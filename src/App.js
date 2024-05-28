import { useEffect, useState } from "react";
import React from 'react';
import Candid from "./components/Candid";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Videos from "./components/Videos";
import PreWed from "./components/PreWed";
import Camera from "./components/Camera";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <div className="App">
       <Router>
      {<NavBar showNav={showNavbar} />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/candid' element={<Candid/>} />
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/pre" element={<PreWed/>}/>
        <Route path="/camera" element={<Camera/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
