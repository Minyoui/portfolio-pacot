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
                            <img src={React_Icon} id='light' alt="React" aria-hidden="true"/>
                            <img src={HTML_Icon} id='light' alt="HTML5" aria-hidden="true"/>
                            <img src={CSS_Icon} id='light' alt="CSS3" aria-hidden="true"/>
                            <img src={JS_Icon} id='light' alt="JavaScript" aria-hidden="true"/>

                            <img src={React_Icon_Dark} id='dark' alt="React" aria-hidden="true"/>
                            <img src={HTML_Icon_Dark} id='dark' alt="HTML5" aria-hidden="true"/>
                            <img src={CSS_Icon_Dark} id='dark' alt="CSS3" aria-hidden="true"/>
                            <img src={JS_Icon_Dark} id='dark' alt="JavaScript" aria-hidden="true"/>
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
                            <img src={VStudio} id='light' alt="Visual Studio Code" aria-hidden="true"/>
                            <img src={Figma} id='light' alt="Figma" aria-hidden="true"/>
                            <img src={Canva} id='light' alt="Canva" aria-hidden="true"/>
                            <img src={Photoshop} id='light' alt="Adobe Photoshop" aria-hidden="true"/>

                            <img src={VStudioDark} id='dark' alt="Visual Studio Code" aria-hidden="true"/>
                            <img src={FigmaDark} id='dark' alt="Figma" aria-hidden="true"/>
                            <img src={CanvaDark} id='dark' alt="Canva" aria-hidden="true"/>
                            <img src={PhotoshopDark} id='dark' alt="Adobe Photoshop" aria-hidden="true"/>
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