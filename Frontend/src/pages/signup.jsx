import React from 'react'
import { useState } from 'react'
import './authorization.css'
import registerUser from '../handler/registrationUtils';



function Signup () {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationResult = await registerUser(
      username,
      name,
      surname,
      email,
      age,
      nationality,
      password
    );

    if (registrationResult.success) {
      console.log("yeahhh")

    } else {
      console.error('Registration failed:', registrationResult.error);
      // Handle registration failure
    }
  };


  return (
    <div className='bg'>
      <div className='registration-container'>
      <h1>Create an Account</h1>
      <form>

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} required />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="surname">Surname:</label>
        <input type="text" id="surname" name="surname" onChange={(e) => setSurname(e.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" onChange={(e) => setAge(e.target.value)} required />

        {/* <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select> */}

        <label htmlFor="nationality">Nationality:</label>
        <input type="text" id="nationality" name="nationality" onChange={(e) => setNationality(e.target.value)} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />

        {/* <label htmlFor="repeatPassword">Repeat Password:</label>
        <input type="password" id="repeatPassword" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} required /> */}

        {/* <label>
          <input
            type="checkbox"
            name="agreeToPrivacyPolicy"
            checked={formData.agreeToPrivacyPolicy}
            onChange={handleChange}
          />
          I agree to the Privacy Policy
        </label> */}

        <button type="submit" onClick={handleSubmit}>Sign Up</button>

        <p>Already have an account? <a href="./login">Log in</a>.</p>
      </form>
      </div>
    </div>
    
  )
}

export default Signup