import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidRightArrow } from "react-icons/bi";
import './styles.css';

function Home() {
  return (
    <div className="container">
      <h1 className="my-3">PORTFOLIO</h1>
      <div className="row">
        <div className="col-md-6">
          <img src="home-pic.jpg" alt="homepic" className="img-fluid my-3 img-small img-with-border rounded" />
        </div>
        <div className="col-md-5 my-3 text-color-background rounded">
          <h2 className="my-2 text-color ">กันทรากร ตั้งกิจจาวิสุทธิ์</h2>
          <h3 className="my-5 text-color">มหาวิทยาลัย</h3>
          <p>คณะ</p>
        </div>
      </div>
      <br/>
      <Link to="/introduction" className="btn btn-primary mx-2"><BiSolidRightArrow /> ไปหน้าถัดไป</Link>
    </div>
  );
}

export default Home;
