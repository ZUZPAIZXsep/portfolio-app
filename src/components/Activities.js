import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import { BiSolidLeftArrow} from "react-icons/bi";
import './styles.css';

function Activities() {
  return (
    <div className="container">
      <h1 className="my-5">Activities</h1>
      {/* เพิ่มรายการกิจกรรมที่เคยทำที่นี่ */}
      <Link to="/about" className="btn btn-primary mx-2"><BiSolidLeftArrow /> หน้าก่อนหน้า</Link>
      <Link to="/home" className="btn btn-secondary mx-2"><FaHome /> หน้าหลัก</Link>
    </div>
  );
}

export default Activities;
