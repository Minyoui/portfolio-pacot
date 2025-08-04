import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about-page/about';
import LandingPage from './pages/landing-page/landing';

function App() {
  return (
    <>
      <LandingPage />
    </>
  )
}

export default App
