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
import './eventmanager_css/eventmanagerprofile.css'; 

export default function EventManagerProfile() {
  
  const [managerData, setManagerData] = useState([]);

  const fetchManagerData = async () => {
    try {
      const email = window.location.pathname.split('/').pop();
      console.log(email);
      const response = await axios.get(`http://localhost:1011/managerlogin/${email}`);
      setManagerData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchManagerData();
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="profile-container" 
      style={{
        backgroundImage: `url(${profile})`,
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {Object.keys(managerData).length > 0 ? (
        <div className="profilecontainer"style={{paddingLeft:"20px"}}> 
          <img src={profile} alt="Profile" className="profile-image" /> 
          <div className="profile-details"> 
            <h2 style={{color:"black"}}>Full Name: {managerData.fullname}</h2>
            <p style={{color:"black"}}>Email: {managerData.email}</p>
            <p style={{color:"black"}}>Contact: {managerData.contact}</p>
            <p style={{color:"black"}}>Brand Name: {managerData.brandname}</p>
          
          </div>
        </div>
      ) : (
        <div className="container"> 
          <p>Data Not Found</p>
        </div>
      )}
    </div>
  );
}
