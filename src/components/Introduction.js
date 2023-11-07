import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import { BiSolidRightArrow } from "react-icons/bi";
import './styles.css';

function Introduction() {
  return (
    <div className="container">
      <h1 className="my-5">คำนำ</h1>
      <p>ข้อความเกี่ยวกับคำนำ</p>
      <img src="รูปภาพคำนำ.jpg" alt="รูปภาพคำนำ" className="img-fluid my-4" />
      <br/>
      <Link to="/home" className="btn btn-secondary mx-2"><FaHome /> หน้าหลัก</Link>
      <Link to="/about" className="btn btn-primary mx-2"><BiSolidRightArrow /> ไปหน้าถัดไป</Link>
    </div>
  );
}

export default Introduction;
