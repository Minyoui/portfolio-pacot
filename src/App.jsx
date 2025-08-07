import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about/about';
import Landing from './pages/landing/landing';
import Navbar from './pages/navbar/navbar';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Footer from './pages/footer/footer';

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
      <Projects />
      <Contact />
      <Footer />

      <DarkModeToggle />
    </>
  )
}

export default App
