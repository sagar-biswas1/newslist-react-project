


import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />}>
        
        </Route>

        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;