import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import { BiSolidRightArrow } from "react-icons/bi";
import './styles.css';

function Introduction() {
  return (
    <div className="container">
      <h1 className="my-2 text-color thai-text">คำนำ</h1>
      <div className="row justify-content-center"> 
        <div className="col-md-11 my-3 text-color-background rounded text-center"> 
          <h3 className="mt-5 text-color thai-text">ยินดีต้อนรับสู่ Portfolio ของฉัน</h3>
          <h3 className="my-3 text-color thai-text">Portfolio นี้เป็นส่วนหนึ่งของวิชา "Selected Topics in Computer Engineering Technology" 
            ที่จัดทำขึ้นเพื่อนำเสนอผลงานและความรู้ที่ได้รับในระหว่างการศึกษาวิชานี้
            โดยผลงานชิ้นนี้จะแสดงถึงความคิดสร้างสรรค์และความสามารถในการพัฒนาเว็บแอปพลิเคชัน รวมถึงข้อมูลส่วนตัวและประวัติการศึกษา</h3>
          <h3 className="my-3 text-color thai-text">ฉันหวังว่า Portfolio นี้จะเป็นแรงบันดาลใจสำหรับท่านที่เข้ามาเยี่ยมชมผลงานของฉัน</h3>
          <br/>
          <h3 className="mt-4 text-color thai-text">Welcome to My Portfolio</h3>
          <h3 className="my-3 text-color thai-text">This portfolio is a part of the "Selected Topics in Computer Engineering Technology" 
          course, created to showcase my work and knowledge acquired during my studies. 
          It reflects my creativity and ability in web application development, as well as personal information and educational history.</h3>
          <h3 className="my-3 text-color thai-text">I hope that this portfolio provides an inspiration to those who visit to view my accomplishments.</h3>
        </div>
      </div>
      <Link to="/home" className="btn btn-secondary mx-2"><FaHome /> หน้าหลัก</Link>
      <Link to="/about" className="btn btn-primary mx-2"><BiSolidRightArrow /> ไปหน้าถัดไป</Link>
    </div>
  );
}
export default Introduction;
