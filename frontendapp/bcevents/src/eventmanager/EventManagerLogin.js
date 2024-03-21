import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import '../main/main_css/login.css'
import profile from '../main/main_images/bg.jpg';
import axios from 'axios';
import img3 from '../main/main_images/sideimg1.jpg'


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
      const response = await axios.post('http://localhost:1011/checkmanagerlogin', formData);
      if (response.data!=null) 
      {
        console.log(response.data)
        //navigate("/emnav");
        navigate(`/emnav/${formData.email}`)
        
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
    <div  style={{
        backgroundImage: `url(${profile})`,
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
       
        <form onSubmit={handleSubmit}>
          <h3 style={{color:"white"}}>EVENT MANAGER LOGIN</h3>
          {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
          <input style={{color:"white"}} type="email" id="email"    className="email-input"      placeholder="Email" value={formData.email} onChange={handleChange} required/> <br/>
          <input style={{color:"white"}} type="password" id="password"   className="email-input"  placeholder="Password" value={formData.password} onChange={handleChange} required/> <br/>
          <button type="submit" className="button">Login</button>
           <div className="signup-container">
          <p>Don't have an account? </p>
          <Link to={"/signup"} className="link-style">Signup</Link>
        </div>
    
        </form>
        <div>
        <h3 style={{paddingTop:"120px",paddingLeft:"525.9px"}}>
        <img src={img3} alt='Summit' style={{ width: '320px', height: '542px'}} />
        </h3>
        </div>
        <div>
        </div>
    </div>
  );
}