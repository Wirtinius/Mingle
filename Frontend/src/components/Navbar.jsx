import React from 'react'
import './Navbar.css'

function Navbar() {
  const handleLogoClick = () => {
    window.location.href = '/'
  }

  return (
    <div className='navbar'>
      <div className="logo" onClick={handleLogoClick}>Mingle</div>
      <div className="buttons">
        <a href="login" className='btn-login'>Login</a>
        <a href="signup" className='btn-signup'>Sign up</a>
      </div>
    </div>
  )
}

export default Navbar