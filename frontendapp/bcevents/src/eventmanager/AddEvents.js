import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../main/main_images/bg.jpg';
import axios from 'axios';

export default function AddEvents() {
    const [formData, setFormData] = useState({
        fullname: '',
        brandname: '',
        categoryname: '',
        cost: '',
        contact: '',
        description: ''
    });

    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1011/insertdetails', formData);
            if (response.status === 200) {
                setFormData({
                    fullname: '',
                    brandname: '',
                    categoryname: '',
                    cost: '',
                    contact: '',
                    description: ''
                });
            }
            setMessage(response.data);
            navigate("/viewevents");
            setError('');
        } catch (error) {
            setError(error.response.data);
            setMessage('');
        }
    };

    return (
        <div style={{
            backgroundImage: `url(${profile})`,
            width: '100%',
            minHeight: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {message ? <h4 align="center" style={{ color: 'white' }}>{message}</h4> : <h4 align="center" style={{ color: 'white' }}>{error}</h4>}
            <form onSubmit={handleSubmit} style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.8)',marginLeft:"500px",marginBottom:"230px" }}>
                <h3 style={{ color: "black", marginTop: '0', textAlign: 'center' }}>Add Event</h3>
                <h7>Full Name<input type="text" id="fullname" className="form-input" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required /><br /></h7>
                <h7>Brandname</h7><input type="text" id="brandname" className="form-input" placeholder="Brand Name" value={formData.brandname} onChange={handleChange} required /><br />
                <h7>categoryname</h7><input type="text" id="categoryname" className="form-input" placeholder="Category" value={formData.categoryname} onChange={handleChange} required /><br />
                <h7>cost</h7><input type="number" id="cost" className="form-input" placeholder="Cost" value={formData.cost} onChange={handleChange} required /><br />
                <h7>contact</h7><input type="text" id="contact" className="form-input" placeholder="Contact No" value={formData.contact} onChange={handleChange} pattern="[6789][0-9]{9}" required /><br />
                <h7>description</h7><textarea id="description" className="form-input" placeholder="Description" value={formData.description} onChange={handleChange} required style={{ height: '100px' }}></textarea>
                <button type="submit" style={{ width: '40%', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>Submit</button>
                <div className="signup-container" style={{ paddingLeft: '20px', textAlign: 'center', marginTop: '10px' }}>
                </div>
            </form>
        </div>
    );
}
