import React, { useState } from "react";
import "./authorization.css";
import loginUser from "../../handler/loginUtils";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginResult = await loginUser(username, password);

    if (loginResult.success) {
      window.location.href = "./";
    } else {
      console.error("Login failed:", loginResult.error);
    }
  };

  return (
    <div className="bg">
      <div className="overlay">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered input-primary w-full max-w-xs mt-3 mb-2"
            onChange={(e) => setUsername(e.target.value)}
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

          <button type="submit" onClick={handleSubmit}>
            Login
          </button>

          <p className="mt-3">
            Don't have an account? <a href="./signup" className="text-purple-500">Sign up</a>.
          </p>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
