import React ,{useState,useEffect}from 'react'
import {  Link ,useNavigate} from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import axios from 'axios'

export default function EventManagerNavBar() {


 
  const navigate = useNavigate();
  
  const [managerData, setManagerData] = useState([]);
  const email = window.location.pathname.split('/').pop();

  const fetchManagerData = async () => {
    try {
       
      const response = await axios.get(`http://localhost:1011/managerlogin/${email}`);
      setManagerData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
      fetchManagerData();
     }, []);

  const navigateToManagerProfile = () => {
   
     
    navigate(`/emprofile/${email}`);
  };

  

  return (
    <div>
      <div className='hero'>
        <ul className='navbar'> 
        <li><button  onClick={navigateToManagerProfile}>Profile</button></li>
      <li><Link  to="/addevents">AddEvent</Link></li>
      <li><Link to="/viewevents">ViewAddedEvents</Link></li>
      <li><Link  to="/services">Booked Events</Link></li>
      <li><Link  to="/home">Logout</Link></li>
        </ul>
        
        <h2 style={{color:"Skyblue",paddingTop:"80pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"45pt"}}> WELCOME </h2>
        <h2 style={{color:"white",paddingTop:"1pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"35pt"}}>{managerData.fullname}</h2>
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
        <p style={{color:"white",paddingTop:"130pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"15pt"}}>with an illustrious 25-year journey as an esteemed event planner,</p><br/>
       <p style={{color:"white",paddingTop:"130pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"15pt"}}>Buttercups surpasses your grandest aspirations, transcends</p><br/>
       <p style={{color:"white",paddingTop:"130pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"15pt"}}>expectations, redefining events to perfection.</p><br/>
    </div>
  </div>
  )
}