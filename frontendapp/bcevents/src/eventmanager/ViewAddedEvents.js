import React,{useState,useEffect} from 'react'
import axios from 'axios'
import profile from '../main/main_images/bg.jpg'
import '../main/main_css/contact.css'
export default function ViewAddedEvents() {


    const [viewevents, setEvents] = useState([]);

  const fetchevents = async () => {
    try {
      const response = await axios.get('http://localhost:1011/viewevents');
      setEvents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchevents();
  }, []);

  
  const deleteclients = async (email) => {
    try {
      await axios.delete(`http://localhost:1011//deleteclients${email}`);
      fetchevents()
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{
        backgroundImage: `url(${profile})`,
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
    
    <div className='card'>
    {Array.isArray(viewevents) && viewevents.length > 0 ? (
    viewevents.map((event, index) => (
      <p key={index}>
        Full Name {event.fullname}<br/>
        BrandName{event.brandname}<br/>
        Category{event.categoryname}<br/>
       Cost{event.cost}<br/>
        Contact{event.contact}<br/>
        Description{event.description}<br/><br/><br/><br/>
      </p>
    ))
  ) : (
   <p>Data Not found</p>
  )}
    </div>
    </div>
 );
  
}