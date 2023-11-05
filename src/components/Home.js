import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    
    <div className="container">
      <h1 className="my-5">PORTFOLIO</h1>
      <h2>ชื่อของคุณ</h2>
      <p>มหาวิยาลัย</p>
      <p>คณะ</p>
      <img src="รูปภาพฉัน.jpg" alt="รูปภาพฉัน" className="img-fluid my-4" />
      <Link to="/introduction" className="btn btn-primary">ไปหน้าถัดไป</Link>
    </div>
  );
}

export default Home;
