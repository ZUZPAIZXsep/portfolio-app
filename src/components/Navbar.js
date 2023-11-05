import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Portfolio</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link">หน้าแรก</Link>
          </li>
          <li className="nav-item">
            <Link to="/introduction" className="nav-link">คำนำ</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">แนะนำตัว</Link>
          </li>
          <li className="nav-item">
            <Link to="/activities" className="nav-link">Activities</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
