import { useState, useEffect } from 'react';
import './skills.css';
import { useDarkMode } from '../../context/DarkModeContext';
import HTML_Icon from '../../assets/Html 5.png';
import React_Icon from '../../assets/React.png';
import CSS_Icon from '../../assets/CSS3.png';
import JS_Icon from '../../assets/JavaScript.png';

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
                    <div className='column'>
                        <p>Design</p>
                        <p>UI/UX Design, Branding, Typography, Color Theory</p>
                    </div>

                    {/* DEVELOPMENT COLUMN */}
                    <div className='column'>
                        <p>Development</p>
                        <div className='dev-icons'>
                            <img src={HTML_Icon} alt="HTML5"/>
                            <img src={React_Icon} alt="React"/>
                            <img src={CSS_Icon} alt="CSS3"/>
                            <img src={JS_Icon} alt="JavaScript"/>
                        </div>
                        <p>React, HTML5, CSS3, JavaScript</p>
                    </div>

                    {/* TOOLS COLUMN */}
                    <div className='column'>
                        <p>Tools</p>
                        <p>Canva, Figma, Visual Studio, Adobe Photoshop</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;