import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidRightArrow } from "react-icons/bi";
import './styles.css';

function Home() {
  return (
    <div className="container">
      <h1 className="my-3 text-color">PORTFOLIO</h1>
      <div className="row">
        <div className="col-md-6">
          <img src="home-pic.jpg" alt="homepic" className="img-fluid my-3 img-small img-with-border rounded" />
        </div>
        <div className="col-md-5 my-3 text-color-background rounded">
          <h3 className="mt-5 text-color thai-text">กันทรากร ตั้งกิจจาวิสุทธิ์</h3>
          <h5 className="my-2 text-color thai-text">KANTHARAKORN TANGKITJAVISUT</h5>
          <br/>
          <h3 className="mt-5 text-color thai-text">มหาวิทยาลัย</h3>
          <h3 className="my-2 text-color thai-text">เทคโนโลยีพระจอมเกล้าพระนครเหนือ</h3>
          <h5 className="my-2 text-color thai-text">KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</h5>
          <br/>
          <h3 className="mt-5 text-color thai-text">คณะ</h3>
          <h3 className="my-2 text-color thai-text">วิทยาลัยเทคโนโลยีอุตสาหกรรม</h3>
          <h5 className="my-2 text-color thai-text">COLLEGE OF INDUSTRIAL TECHNOLOGY</h5>

        </div>
      </div>
      <br/>
      <Link to="/introduction" className="btn btn-primary mx-2 "><BiSolidRightArrow /> ไปหน้าถัดไป</Link>
    </div>
  );
}

export default Home;
