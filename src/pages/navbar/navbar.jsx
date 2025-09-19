import './navbar.css';
import { useState, useEffect } from 'react';

import MiniDarkLogo from '../../assets/pacot-logo.svg';
import MiniLightLogo from '../../assets/pacot-logo-drk.svg';
import DarkModeToggle from '../components/DarkModeToggle';
import { useDarkMode } from '../../context/DarkModeContext';

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
            {/* NAVBAR LOGO */}
            <a href='#home' className={`navbar-logo ${darkMode? 'light' : 'dark'}`}>
                <img src={MiniDarkLogo} alt="mini-logo" id="dark" />
                <img src={MiniLightLogo} alt="mini-logo" id="light" />
            </a>
            

            {/* MAIN NAVBAR */}
            <div className='nav-wrapper'>
                <nav className={`nav-container ${scrolled? 'scrolled' : ''}`}
                    id={`${menuOpen? 'nav-active' : ''}`}
                >
                    <ul>
                        <li><a href='#about'>ABOUT</a></li>
                        <li><a href='#skills'>SKILLS</a></li>
                        <li><a href='#projects'>PROJECTS</a></li>
                        <li><a href='#contact'>CONTACT</a></li>
                    </ul>
                    <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}
                        id={`${darkMode? 'light-hamburger' : ''}`}>
                        ☰
                    </div>
                    <div className={`cancel ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                        X
                    </div>
                </nav>
            </div>
           
            <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      {/* Your Routes or Components */}
      <DarkModeToggle />
    </div>
    <a href='#home' className={`quick-nav ${darkMode? 'light' : 'dark'}`}/>
        </>
    )
}

export default Navbar;