import React, { useState } from 'react';
import './authorization.css';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data submitted:', loginData);
  };

  return (
    <div className="bg">
      <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={loginData.email} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} required />

        <button type="submit">Login</button>

        <p>Don't have an account? <a href="./signup">Sign up</a>.</p>
      </form>
      </div>
    </div>
  );
}

export default Login;