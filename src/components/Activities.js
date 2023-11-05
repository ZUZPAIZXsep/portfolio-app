import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Activities() {
  return (
    <div className="container">
      <h1 className="my-5">Activities</h1>
      {/* เพิ่มรายการกิจกรรมที่เคยทำที่นี่ */}
      <Link to="/about" className="btn btn-primary mx-2">หน้าก่อนหน้า</Link>
      <Link to="/home" className="btn btn-secondary mx-2">หน้าหลัก</Link>
    </div>
  );
}

export default Activities;
