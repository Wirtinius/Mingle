import React from "react";
import "./Navbar.css";

function Navbar() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={handleLogoClick}>
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="buttons">
          <a href="login" className="btn-login">
            Login
          </a>
          <a href="signup" className="btn-signup">
            Sign up
          </a>
        </div>
      </div>
      <div className="navbar logged">
        <div className="logo" onClick={handleLogoClick}>
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="user-profile" onClick={handleDropdownClick}>
          <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
          <span className="profile-name">John Doe</span>
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
