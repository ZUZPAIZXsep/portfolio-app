import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Introduction from './components/Introduction';
import About from './components/About';
import Activities from './components/Activities';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <img src="background.jpg" alt="รูปภาพพื้นหลัง" className="background-image" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
