import './navbar.css';
import { useState, useEffect } from 'react';
import MiniDarkLogo from '../../assets/pacot-mini-logo.svg';
import MiniLightLogo from '../../assets/pacot-mini-logo-drk.svg';
import DarkModeToggle from '../components/DarkModeToggle';
import { useDarkMode } from '../../context/DarkModeContext';

function Navbar () {
    const { darkMode } = useDarkMode();
    
    return (
        <>
            <nav className="navbar">
                <li>
                    <a href='/'>
                        <img src={MiniDarkLogo} alt="mini-logo" className={darkMode ? 'light-mode' : 'dark-mode'}/>
                        <img src={MiniLightLogo} alt="mini-logo" className={darkMode ? 'dark-mode' : 'light-mode'}/>
                    </a>
                </li>
                <div className='navigation-links'>
                    <li>
                        <a href="/" className={darkMode ? 'light' : 'dark'}>HOME</a>
                    </li>
                    <li>
                        <a href="/" className={darkMode ? 'light' : 'dark'}>ABOUT</a>
                    </li>
                    <li>
                        <a href="/" className={darkMode ? 'light' : 'dark'}>PROJECT</a>
                    </li>
                    <li>
                        <a href="/" className={darkMode ? 'light' : 'dark'}>CONTACT</a>
                    </li>
                </div>
            </nav>
            <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      {/* Your Routes or Components */}
      <DarkModeToggle />
    </div>
        </>
    )
}

export default Navbar;