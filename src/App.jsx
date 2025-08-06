import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about-page/about';
import Landing from './pages/landing-page/landing';
import Navbar from './pages/navbar/navbar';
import Skills from './pages/skills-page/skills';

import DarkModeToggle from './pages/components/DarkModeToggle';
import { useDarkMode } from './context/DarkModeContext';

function App() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle('light', darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <DarkModeToggle />
    </>
  )
}

export default App
