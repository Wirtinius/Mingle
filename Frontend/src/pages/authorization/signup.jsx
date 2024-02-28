import React from "react";
import { useState } from "react";
import "./authorization.css";
import registerUser from "../../handler/registrationUtils";

function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [password, setPassword] = useState("");

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
      console.log("yeahhh");
    } else {
      console.error("Registration failed:", registrationResult.error);
      // Handle registration failure
    }
  };

  return (
    <div className="bg">
      <div className="overlay">
        <div className="registration-container">
          <h2>Create an Account</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered input-primary w-full max-w-xs mt-3 mb-2"
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Surname"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
              onChange={(e) => setSurname(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Age"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
              onChange={(e) => setAge(e.target.value)}
              required
            />

            {/* <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select> */}

            <input
              type="text"
              placeholder="Nationality"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
              onChange={(e) => setNationality(e.target.value)}
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="input input-bordered input-primary w-full max-w-xs mb-3"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

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

            <button type="submit" onClick={handleSubmit}>
              Sign Up
            </button>

            <p className="mt-3">
              Already have an account? <a href="./login" className="text-purple-500">Log in</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
