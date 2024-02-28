import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function Home() {
  //   const [user, setUser] = useState('')

  //   useEffect(() => {
  //     let authToken = JSON.parse(window.localStorage.getItem('authToken'))
  //     let user = jwtDecode(authToken);
  //     if (user) {
  //         setUser(user);
  //     }
  // }, []);

  //   console.log(user)

  const handleButtonClick = () => {
    window.location.href = "matches";
  };

  return (
    <div className="hero-image">
      <div className="overlay">
        <button onClick={handleButtonClick}>Find your perfect match!</button>
        <img src="logo.png" alt="Logo" className="mt-10" />
      </div>
    </div>
  );
}

export default Home;
