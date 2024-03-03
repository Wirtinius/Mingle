import { useEffect, useState } from "react";
import "./Navbar.css";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    let authToken = window.localStorage.getItem("authToken");
    if (authToken) {
      let user = jwtDecode(authToken);
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    setLoginStatus(!!localStorage.getItem("authToken"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setCurrentUser(null);
    setLoginStatus(false);
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={handleLogoClick}>
          <img src="logo2.png" alt="Logo" />
        </div>
        {loginStatus ? (
          <div className="buttons">
            <a href="/Matches" className="btn-signup">
              Matches
            </a>
            <a href="/Profile" className="btn-login">
              {currentUser.username}
            </a>
            <a href="/" className="btn-signup" onClick={handleLogout}>
              Log out
            </a>
          </div>
        ) : (
          <div className="buttons">
            <a href="login" className="btn-login">
              Login
            </a>
            <a href="signup" className="btn-signup">
              Sign up
            </a>
          </div>
        )}
      </div>
      {/* <div className="navbar logged">
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
      </div> */}
    </>
  );
}

export default Navbar;
