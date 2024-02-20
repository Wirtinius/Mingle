import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/signup';
import Login from './pages/login';
import Matches from './pages/Matches';
import Profile from './pages/Profile';
import Map from './pages/Map';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />

      </Routes>
    </Router>
  );
}

export default App
