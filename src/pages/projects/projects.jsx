import './projects.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../context/DarkModeContext';

function Projects () {
    const { darkMode } = useDarkMode();
    
    return (
        <>
            <div className='project-wrapper' id="projects">
                <div className={`projects-title ${darkMode? 'light' : 'dark'}`}>
                    <p><span>MY</span> PROJECTS</p>
                    <div className={`divider-line ${darkMode? 'light' : 'dark'}`} />
                </div>
            </div>
        </>
    )
}

export default Projects;