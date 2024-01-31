import React from 'react'
import './Home.css'

function Home() {
  const handleButtonClick = () => {
    window.location.href = '/signup'
  }

  return (
    <div className='hero-image'>
      <div className="overlay">
        <h1>Welcome to <span>Mingle</span></h1>
        <h3>Single and ready to mingle?</h3>
        <button onClick={handleButtonClick}>Find your perfect match!</button>
      </div>
    </div>
  )
}

export default Home