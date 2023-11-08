import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel,FaHome,} from 'react-icons/fa';
import { BiSolidLeftArrow } from "react-icons/bi";
import { SiBitcoincash } from "react-icons/si";
import './styles.css';
function Activities() {
  return (
    <div className="container about rounded">
      <div className="row">
        <div className="col-md-12">
          <h1 className='thai-text text-color'>ACTIVITIES</h1>
          <p className='aboutme rounded'>
            <h2 className='thai-text'><FaHotel /> HOTEL RESERVATION WEB-APPLICATION</h2>
            <h4 className='thai-text'>ผลงานการสร้างเว็บจองโรงแรมที่จัดทำขึ้นในวิชา Software Engineering</h4>
            <img src="hotelweb.png" alt="hotelpic" style={{ borderRadius: '5px' }} className="img-fluid mt-2 rounded"/>
            <img src="hotelweb2.png" alt="hotelpic2" style={{ borderRadius: '5px' }} className="img-fluid mt-3 rounded"/>
          </p>
          <p className='contactme rounded'>
          <h2 className='thai-text'><SiBitcoincash /> CURRENCY EXCHANGE API</h2>
            <h4 className='thai-text'>ผลงานการสร้าง api เว็บแลกเปลี่ยนสกุลเงินจัดทำขึ้นในวิชา Mobile & Cloud Computing</h4>
            <img src="apiexchange.png" alt="apipic" style={{ borderRadius: '5px' }} className="img-fluid mt-2 rounded"/>
            <img src="apiexchange2.png" alt="apipic2" style={{ borderRadius: '5px' }} className="img-fluid mt-3 rounded"/>
            <img src="apiexchange3.png" alt="apipic3" style={{ borderRadius: '5px' }} className="img-fluid mt-3 rounded"/>
            <img src="apiexchange6.png" alt="apipic6" style={{ borderRadius: '5px' }} className="img-fluid mt-3 rounded"/>
            <img src="apiexchange4.png" alt="apipic4" style={{ borderRadius: '5px' }} className="img-fluid mt-3 rounded"/>
            <img src="apiexchange5.png" alt="apipic5" style={{ borderRadius: '5px' }} className="img-fluid mt-3 rounded"/>
          </p>
          <Link to="/home" className="btn btn-secondary mx-2"><FaHome /> หน้าหลัก</Link>
          <Link to="/about" className="btn btn-primary mx-2 "><BiSolidLeftArrow /> หน้าก่อนหน้า</Link>
        </div>
      </div>
    </div>
  );
}

export default Activities;
