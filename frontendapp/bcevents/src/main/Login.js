import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './main_css/login.css'
import axios from 'axios';
import img3 from './main_images/sideimg1.jpg'


export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:1011/checkclientlogin', formData);
      if (response.data!=null) 
      {
        console.log(response.data)
        navigate(`/clientnav/${formData.email}`)
        
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };


  
  return (
    <div>
       
        <form onSubmit={handleSubmit} style={{
  width: '430px',
  height: '490px',
  marginTop: '7%',
  marginRight: '400px',
  paddingTop: '50px',
  textAlign: 'center',
  float: 'right',
  borderWidth: '5px',
  borderColor: 'rgb(162, 155, 155)', 
  borderStyle: 'groove',
}}>
          <h3 style={{color:"white"}}>CLIENT LOGIN</h3>
          {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
          <input style={{color:"white"}} type="email" id="email"    className="email-input"      placeholder="Email" value={formData.email} onChange={handleChange} required/> <br/>
          <input style={{color:"white"}} type="password" id="password"   className="email-input"  placeholder="Password" value={formData.password} onChange={handleChange} required/> <br/>
          <button type="submit" className="button">Login</button>
           <div className="signup-container">
          <p>Don't have an account? </p>
          <ul style={{paddingTop:"25px"}}>
          <button className='button1'><Link to={"/signup"} className="link-style"><strong >Signup</strong></Link></button><br/>
          <button className='button1'><Link to={"/adminlogin"} className="link-style"><strong >Admin-Login</strong></Link></button><br/>
          <button className='button1'><Link to={"/emlogin"} className="link-style"><strong>Organizer-Login</strong></Link><br/></button><br/>
          </ul>
        </div>
    
        </form>
        <div>
        <h3 style={{paddingTop:"120px",paddingLeft:"520.5px"}}>
        <img src={img3} alt='Summit' style={{ width: '320px', height: '548px'}} />
        </h3>
        </div>
    </div>
  );
}