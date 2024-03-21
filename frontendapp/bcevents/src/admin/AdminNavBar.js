import React from 'react'
import {  Link } from 'react-router-dom';
import '../main/main_css/mainnavbar.css'
import Typewriter from 'typewriter-effect';
export default function AdminNavBar() {
  return (
    <div>
      <div className='hero'>
        <ul className='navbar'> 
      <li><Link  to="/viewclient">ViewClients</Link></li>
      <li><Link  to="/viewmanager">ViewEventManagers</Link></li>
      <li><Link  to="/portfolio">DeleteClients</Link></li>
      <li><Link  to="/contact">DeleteOrganizers</Link></li>
      <li><Link to="/home">Logout</Link></li>
      <li><Link  to="/login"></Link></li>
      </ul>
    </div>
    <div>
    <h2 style={{color:"white",paddingTop:"130pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"45pt"}}>BUTTERCUP EVENTS</h2>
    <h1 style={{color:"Skyblue",fontFamily:"cursive",fontSize:"32pt" , paddingLeft:"178px",paddingBottom:"12px"}}>
        <Typewriter

        options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: ["Events Made in Heaven","Celebrations","Thrills","Engagements","Parties","Racings"]
        }}
        
        />
       </h1>
    </div>
    </div>
  )
}