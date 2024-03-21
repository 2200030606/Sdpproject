import React, { useState, useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom';
import Home from '../main/Home';
import Services from '../main/Services';
import Portfolio from '../main/Portfolio';
import Contact from '../main/Contact';
import '../main/main_css/mainnavbar.css';
import profile from '../main/main_images/bg.jpg';
import { useRef } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import './client_css/clientprofile.css'

export default function ClientProfile() {
  const home = useRef(null);
  const services = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);
  
  const [clientData, setClientData] = useState([]);

  const fetchClientData = async () => {
    try {
       const email = window.location.pathname.split('/').pop();
       console.log(email)
      const response = await axios.get(`http://localhost:1011/clientlogin/${email}`);
      setClientData(response.data);
      
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
      fetchClientData();
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };





  return (
    <div className="container">
      <div className="profile-container">
        <img src={profile} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <div className="detail-row">
            <span className="detail-label">Full Name:</span>
            <span className="detail-value">{clientData.fullname}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{clientData.email}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Contact:</span>
            <span className="detail-value">{clientData.contact}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Action:</span>
            <span className="detail-value">{/* <button onClick={() => deleteJobSeeker(jobseeker.email)} className='button'>Delete</button> */}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
