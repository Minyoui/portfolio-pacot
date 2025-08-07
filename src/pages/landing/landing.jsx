import './landing.css';
import { useDarkMode } from '../../context/DarkModeContext';
import Model from '../../assets/pacot-pose.svg';

import DarkLogo from '../../assets/pacot-logo.svg';
import LightLogo from '../../assets/pacot-logo-drk.svg';

function LandingPage () {
    const { darkMode } = useDarkMode();

    return (
        <>
            <div className='landing-wrapper' id='home'> 
                <div className='landing-header'>
                    <div className='landing-title'>
                        <p className={darkMode? 'light' : 'dark'}>Hi I am</p>
                        <img src={DarkLogo} alt="pacot-logo" className={darkMode? 'light-mode' : 'dark-mode'}/>
                        <img src={LightLogo} alt="pacot-logo" className={darkMode? 'dark-mode' : 'light-mode'}/>
                        <p className={darkMode? 'light' : 'dark'} id="desc"><strong>UI/UX</strong> DESIGNER <strong>FRONT-END</strong> DEVELOPER</p>
                    </div>
                    <div className='landing-details'>
                        <div className='project-details'>
                            <p className="label">PROJECTS</p>
                            <p className='value'>8+</p>
                        </div>
                        <div className='line' />
                        <div className='experiences-details'>
                            <p className="label">EXPERIENCES</p>
                            <p className='value'>3+ Years</p>
                        </div>
                        <div className='line' />
                        <a href="#contact" className='contact-jump'>
                            <button className={`hire-me-btn ${darkMode? 'light' : 'dark'}`}>Hire Me</button>
                        </a>
                    </div>
                </div>
                <img src={Model} alt="pacot-model" id="model"/>
            </div>
            
            
        </>
    )
}

export default LandingPage;