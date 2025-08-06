import { useState, useEffect } from 'react';
import './skills.css';
import { useDarkMode } from '../../context/DarkModeContext';
import HTML_Icon from '../../assets/Html 5.png';
import React_Icon from '../../assets/React.png';
import CSS_Icon from '../../assets/CSS3.png';
import JS_Icon from '../../assets/JavaScript.png';
import Canva from '../../assets/Canva-logo 1.png';
import Figma from '../../assets/Figma.png';
import VStudio from '../../assets/Visual Studio Code 2019.png';
import Photoshop from '../../assets/Adobe Photoshop.png';

function Skills () {
    const { darkMode } = useDarkMode();

    return (
        <>
            <div className='skills-wrapper' id="skills">
                <div className={`skills-title ${darkMode? 'light' : 'dark'}`}>
                    <p><span>MY</span> SKILLS</p>
                    <div className={`divider-line ${darkMode? 'light' : 'dark'}`} />
                </div>
                <div className='skill-columns'>
                    {/* DESIGN COLUMN */}
                    <div className={`column ${darkMode? 'light' : 'dark'}`}>
                        <div className='info'>
                            <h1>Design</h1>
                            <p className={darkMode? 'light' : 'dark'}>UI/UX Design, Branding, Typography, Color Theory</p>
                        </div>
                    </div>

                    {/* DEVELOPMENT COLUMN */}
                    <div className={`column ${darkMode? 'light' : 'dark'}`}>
                        <div className='info'>
                            <h1>Development</h1>
                            <div className='dev-icons'>
                                <img src={React_Icon} alt="React"/>
                                <img src={HTML_Icon} alt="HTML5"/>
                                <img src={CSS_Icon} alt="CSS3"/>
                                <img src={JS_Icon} alt="JavaScript"/>
                            </div>
                            <p className={darkMode? 'light' : 'dark'}>React, HTML5, CSS3, JavaScript</p>
                        </div>
                    </div>

                    {/* TOOLS COLUMN */}
                    <div className={`column ${darkMode? 'light' : 'dark'}`}>
                        <div className='info'>
                            <h1>Tools</h1>
                            <div className='tool-icons'>
                                <img src={Canva} alt="Canva"/>
                                <img src={Figma} alt="Figma"/>
                                <img src={VStudio} alt="Visual Studio"/>
                                <img src={Photoshop} alt="Adobe Photoshop"/>
                            </div>
                            <p className={darkMode? 'light' : 'dark'}>Canva, Figma, Visual Studio, Adobe Photoshop</p>
                        </div>
                    </div>
                </div>
                <div className={`soft-skills ${darkMode? 'light' : 'dark'}`}>
                    <p><strong>Soft Skills:</strong> Creativity, Communication, Teamwork, Leadership, Empathy, Emotional Intelligence, Conflict Resolution, Adaptability</p>
                </div>
            </div>
        </>
    )
}

export default Skills;