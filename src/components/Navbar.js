import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand thai-text" style={{fontSize:"22px"}}>PORTFOLIO</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link thai-text" style={{fontSize:"19px"}}>หน้าแรก</Link>
          </li>
          <li className="nav-item">
            <Link to="/introduction" className="nav-link thai-text" style={{fontSize:"19px"}}>คำนำ</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link thai-text" style={{fontSize:"19px"}}>แนะนำตัว</Link>
          </li>
          <li className="nav-item">
            <Link to="/activities" className="nav-link thai-text" style={{fontSize:"19px"}}>Activities</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
