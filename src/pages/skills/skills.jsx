import { useState, useEffect } from 'react';
import './skills.css';
import { useDarkMode } from '../../context/DarkModeContext';
import HTML_Icon from '../../assets/Html 5.svg';
import React_Icon from '../../assets/React.svg';
import CSS_Icon from '../../assets/CSS3.svg';
import JS_Icon from '../../assets/JavaScript.svg';

import Canva from '../../assets/Canva.svg';
import Figma from '../../assets/Figma.svg';
import VStudio from '../../assets/Visual Studio.svg';
import Photoshop from '../../assets/Adobe Photoshop.svg';


function Skills () {
    const { darkMode } = useDarkMode();

    return (
        <>
            <div className='skills-wrapper' id='skills'>
                {/* DEVELOPMENT */}
                <div className={`development-container ${darkMode? 'light' : 'dark'}`}>
                    <h1>DEVELOPMENT</h1>
                    <div className={`development-info ${darkMode? 'light' : 'dark'}`}>
                        <div className='dev-left'>
                            <p>React, HTML5, CSS3, JavaScript</p>
                            <div className='line-left' />
                        </div>
                        <div className='development-icons'>
                            <img src={React_Icon} />
                            <img src={HTML_Icon} />
                            <img src={CSS_Icon} />
                            <img src={JS_Icon} />
                        </div>
                        <div className='dev-right'>
                            <br/>
                            <div className='line-right' />
                        </div>
                    </div>
                </div>

                {/* TOOLS */}
                <div className={`tools-container ${darkMode? 'light' : 'dark'}`}>
                    <h1>TOOLS</h1>
                    <div className={`tools-info ${darkMode? 'light' : 'dark'}`}>
                        <div className='tools-left'>
                            <br />
                            <div className='line-left' />
                        </div>
                        <div className='tools-icons'>
                            <img src={VStudio} />
                            <img src={Figma} />
                            <img src={Canva} />
                            <img src={Photoshop} />
                        </div>
                        <div className='tools-right'>
                            <p>Visual Studio, Figma, Canva, Adobe Photoshop</p>
                            <div className='line-right' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;