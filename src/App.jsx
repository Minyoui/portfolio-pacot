import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about-page/about';
import LandingPage from './pages/landing-page/landing';
import Navbar from './pages/navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
    </>
  )
}

export default App
