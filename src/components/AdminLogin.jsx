import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log("API URL:", process.env.REACT_APP_API_URL);

        const res = await fetch("https://tpnutrition-backend.onrender.com/admin/login",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
        
        const data = await res.json();
        if (data.success) {
            alert('Login successful');
            navigate('/admin/dashboard');
        } else {
            setError(data.message);
        }
    } catch (err) {
        setError('Something went wrong.');
    }
};

return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} style={{ margin: 'auto' }}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required /><br /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /><br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;