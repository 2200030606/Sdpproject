import React ,{useState,useEffect}from 'react'
import {  Link ,useNavigate} from 'react-router-dom';
import axios from 'axios'
import '../main/main_css/mainnavbar.css'
import Typewriter from 'typewriter-effect';


export default function ClientNavBar() {

  const [clientData, setClientData] = useState([]);

  
  const navigate = useNavigate();
  
  const email = window.location.pathname.split('/').pop();
  const navigateToClientProfile = () => {
   
    
        setClientData(email)
      console.log(email)
    navigate(`/clientprofile/${email}`);
  };


  const fetchClientData = async () => {
    try {
   
      const response = await axios.get(`http://localhost:1011/clientlogin/${email}`);
      setClientData(response.data);
      
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
      fetchClientData();
     }, []);

 
  return (
    <div>
       <div className='hero'>
        <ul className='navbar'> 
        <li><button  onClick={navigateToClientProfile}>Profile</button></li>
      <li><Link  to="/bookevent">BookEvent</Link></li>
      <li><Link  to="/home">Saved</Link></li>
      <li><Link  to="/home">Logout</Link></li>
        </ul>

        <h2 style={{color:"Skyblue",paddingTop:"80pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"45pt"}}> WELCOME </h2>
        <h2 style={{color:"white",paddingTop:"1pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"35pt"}}>{clientData.fullname}</h2>
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