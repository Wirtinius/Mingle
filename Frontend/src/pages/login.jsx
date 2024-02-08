import React, { useState } from 'react';
import './authorization.css';
import loginUser from '../handler/loginUtils';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginResult = await loginUser(
      username,
      password
    );

    if (loginResult.success) {
      window.location.href = './'

    } else {
      console.error('Login failed:', loginResult.error);
    }
  };

  return (
    <div className="bg">
      <div className='login-container'>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="username" id="username" name="username"  onChange={(e) => setUsername(e.target.value)} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" onClick={handleSubmit}>Login</button>

        <p>Don't have an account? <a href="./signup">Sign up</a>.</p>
      </form>
      </div>
    </div>
  );
}

export default Login;