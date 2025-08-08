import './navbar.css';
import { useState, useEffect } from 'react';

import MiniDarkLogo from '../../assets/pacot-logo.svg';
import MiniLightLogo from '../../assets/pacot-logo-drk.svg';
import DarkModeToggle from '../components/DarkModeToggle';
import { useDarkMode } from '../../context/DarkModeContext';
import MenuIcon from '../../assets/Menu.png';

function Navbar () {
    const [ scrolled, setScrolled ]= useState(false);
    const [ menuOpen, setMenuOpen ] = useState(false);
    const { darkMode } = useDarkMode();
    
    // Navbar Scroll Animation
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile navigation if screen is resized to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 720) {
                setMenuOpen(false);
            } 
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                    <a href='#home'>
                        <img src={MiniDarkLogo} alt="mini-logo" className={darkMode ? 'light-mode' : 'dark-mode'}/>
                        <img src={MiniLightLogo} alt="mini-logo" className={darkMode ? 'dark-mode' : 'light-mode'}/>
                    </a>
                
                <ul className={`navigation-links ${scrolled ? 'scrolled' : ''}`}>
                    <img src={MenuIcon} />
                    <li>
                        <a href="#about" className={darkMode ? 'light' : 'dark'}>ABOUT</a>
                    </li>
                    <li>
                        <a href="#skills" className={darkMode ? 'light' : 'dark'}>SKILLS</a>
                    </li>
                    <li>
                        <a href="#projects" className={darkMode ? 'light' : 'dark'}>PROJECT</a>
                    </li>
                    <li>
                        <a href="#contact" className={darkMode ? 'light' : 'dark'}>CONTACT</a>
                    </li>
                </ul>
            </nav>
            <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      {/* Your Routes or Components */}
      <DarkModeToggle />
    </div>
        </>
    )
}

export default Navbar;