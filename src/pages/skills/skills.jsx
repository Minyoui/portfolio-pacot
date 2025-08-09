import { useState, useEffect } from 'react';
import './skills.css';
import { useDarkMode } from '../../context/DarkModeContext';

import React_Icon from '../../assets/React.svg';
import React_Icon_Dark from '../../assets/ReactDark.svg';

import HTML_Icon from '../../assets/Html 5.svg';
import HTML_Icon_Dark from '../../assets/HTML5Dark.svg';

import CSS_Icon from '../../assets/CSS3.svg';
import CSS_Icon_Dark from '../../assets/CSS3Dark.svg';

import JS_Icon from '../../assets/JavaScript.svg';
import JS_Icon_Dark from '../../assets/JSDark.svg';

import Canva from '../../assets/Canva.svg';
import CanvaDark from '../../assets/CanvaDark.svg';

import Figma from '../../assets/Figma.svg';
import FigmaDark from '../../assets/FigmaDark.svg';

import VStudio from '../../assets/Visual Studio.svg';
import VStudioDark from '../../assets/VStudioDark.svg';

import Photoshop from '../../assets/Adobe Photoshop.svg';
import PhotoshopDark from '../../assets/PhotoshopDark.svg';


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
                            <img src={React_Icon} id='light'/>
                            <img src={HTML_Icon} id='light' />
                            <img src={CSS_Icon} id='light' />
                            <img src={JS_Icon} id='light' />

                            <img src={React_Icon_Dark} id='dark' />
                            <img src={HTML_Icon_Dark} id='dark' />
                            <img src={CSS_Icon_Dark} id='dark' />
                            <img src={JS_Icon_Dark} id='dark' />
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
                            <img src={VStudio} id='light' />
                            <img src={Figma} id='light' />
                            <img src={Canva} id='light' />
                            <img src={Photoshop} id='light' />

                            <img src={VStudioDark} id='dark' />
                            <img src={FigmaDark} id='dark' />
                            <img src={CanvaDark} id='dark' />
                            <img src={PhotoshopDark} id='dark' />
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