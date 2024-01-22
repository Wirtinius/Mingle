import React from 'react'
import { useState } from 'react'
import './authorization.css'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'male',
    nationality: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : (name === 'age' ? Math.max(0, parseInt(value)) : value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreeToPrivacyPolicy) {
      console.log('Form submitted:', formData);
    } else {
      alert('Please agree to the Privacy Policy before signing up.');
    }
  };

  return (
    <div className='bg'>
      <div className='registration-container'>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="surname">Surname:</label>
        <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="nationality">Nationality:</label>
        <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <label htmlFor="repeatPassword">Repeat Password:</label>
        <input type="password" id="repeatPassword" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} required />

        <label>
          <input
            type="checkbox"
            name="agreeToPrivacyPolicy"
            checked={formData.agreeToPrivacyPolicy}
            onChange={handleChange}
          />
          I agree to the Privacy Policy
        </label>

        <button type="submit" disabled={!formData.agreeToPrivacyPolicy}>Sign Up</button>

        <p>Already have an account? <a href="./login">Log in</a>.</p>
      </form>
      </div>
    </div>
    
  )
}

export default Signup