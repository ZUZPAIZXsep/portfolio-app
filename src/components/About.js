import React from 'react';
import ResumeButton from './ResumeButton';
import SkillsList from './Skill';
import { Link } from 'react-router-dom';
import { FaAddressCard,FaHome,FaFacebook,FaInstagram} from 'react-icons/fa';
import { RiContactsBookLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { BiSolidLeftArrow,BiSolidRightArrow,BiCodeAlt } from "react-icons/bi";
import { BsMortarboardFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import './styles.css';

function About() {
  return (
    <div className="container about rounded">
      <div className="row">
        <div className="col-md-6">
          <h1 className='thai-text text-color'>PROFILE</h1>
          <p className='aboutme rounded'>
            <h2 className='thai-text'><FaAddressCard /> ABOUT ME</h2>
            <p className='thai-text'>Name : Kantharakorn Tangkitjavisut</p>
            <p className='thai-text'>Nickname : Sprite</p>
            <p className='thai-text'>Birthday : 17 July 2002</p>
          </p>
          <p className='contactme rounded'>
            <h2 className='thai-text'><RiContactsBookLine /> Contact</h2>
            <p className='thai-text'><FiPhone /> 092-841-3531</p>
            <p className='thai-text'><AiOutlineMail /> kantharakorn.t@gmail.com</p>
            <p className='thai-text'><FaFacebook /> Kantharakorn Tangkitjavisut </p>
            <p className='thai-text'><FaInstagram /> zuzpaiz____</p>
          </p>
          <p className='addressme rounded'>
            <h2 className='thai-text'><FaHome /> Address</h2>
            <p className='thai-text'>92/389 Lumpini Ville Nakorn In - Riverview Nakornin Road , Taladkwan , Muang , Nonthaburi 11000</p>
          </p>
          <p className='edume rounded'>
            <h2 className='thai-text'><BsMortarboardFill /> Educational </h2>
            <p><b >King Mongkut’s University of Technology North Bangkok</b> (2020-present) (GPAX 3.28) (College of Industrial Technology 
                    Department of Electronic Engineering Technology )</p>
            <p><b>Kanchanaburi Technical College</b> (2017-2019) (GPAX 3.29) (Certificate of Vocational Education Electronics)</p>
          </p>
          <p className='addressme rounded'>
            <h2 className='thai-text'><BiCodeAlt /> SKILLS</h2>
            <SkillsList/>
          </p>
          <ResumeButton />
          <br/>
          <Link to="/home" className="btn btn-secondary mx-2"><FaHome /> หน้าหลัก</Link>
          <Link to="/introduction" className="btn btn-primary mx-2 "><BiSolidLeftArrow /> หน้าก่อนหน้า</Link>
          <Link to="/activities" className="btn btn-primary mx-2"><BiSolidRightArrow /> ไปหน้าถัดไป</Link>
        </div>
        <div className="col-md-3">
          <img src="siam-about.jpg" alt="aboutpic" style={{ paddingTop: '3.7rem', borderRadius: '5px' }} className="img-fluid my-4"/>
          <img src="about-pic2.jpg" alt="aboutpic" style={{ borderRadius: '5px' }} className="img-fluid mt-2"/>
        </div>
        <div className="col-md">
          <img src="about-pic3.jpg" alt="aboutpic" style={{ paddingTop: '3.7rem', borderRadius: '5px' }} className="img-fluid my-4"/>
          <img src="about-pic4.jpg" alt="aboutpic" style={{ borderRadius: '5px' }} className="img-fluid mt-2"/>
        </div>
      </div>
    </div>
  );
}

export default About;

