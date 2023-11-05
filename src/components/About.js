import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressCard,FaHome,FaFacebook,FaInstagram} from 'react-icons/fa';
import { RiContactsBookLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import './styles.css';

function About() {
  return (
    <div className="container about rounded">
      <div className="row">
        <div className="col-md-6">
          <h1>PROFILE</h1>
          <p className='aboutme rounded'>
            <h2><FaAddressCard /> ABOUT ME</h2>
            <p>Name : Kantharakorn Tangkitjavisut</p>
            <p>Nickname : Sprite</p>
            <p>Birthday : 17 July 2002</p>
          </p>
          <p className='addressme rounded'>
            <h2><FaHome /> Address</h2>
            <p>92/389 Lumpini Ville Nakorn In - Riverview Nakornin Road , Taladkwan , Muang , Nonthaburi 11000</p>
          </p>
          <p className='contactme rounded'>
            <h2><RiContactsBookLine /> Contact</h2>
            <p><FiPhone /> 092-841-3531</p>
            <p><AiOutlineMail /> kantharakorn.t@gmail.com</p>
            <p><FaFacebook /> Kantharakorn Tangkitjavisut </p>
            <p><FaInstagram /> zuzpaiz____</p>
          </p>
          <p className='edume rounded'>
            <h2><RiContactsBookLine /> Educational </h2>
            <p><b>King Mongkut’s University of Technology North Bangkok</b> (2020-present) (GPAX 3.28) (College of Industrial Technology 
                    Department of Electronic Engineering Technology )</p>
            <p><b>Kanchanaburi Technical College</b> (2017-2019) (GPAX 3.29) (Certificate of Vocational Education Electronics)</p>
          </p>
          <Link to="/introduction" className="btn btn-primary mx-2">หน้าก่อนหน้า</Link>
          <Link to="/activities" className="btn btn-primary mx-2">ไปหน้าถัดไป</Link>
        </div>
        <div className="col-md-3">
          <img src="siam-about.jpg" alt="รูปภาพคำนำ" className="img-fluid my-4 rounded" />
        </div>
      </div>
    </div>
  );
}

export default About;
