import './landing.css';
import DarkModeToggle from '../components/DarkModeToggle';
import { useDarkMode } from '../../context/DarkModeContext';
import Model from '../../assets/pacot-model.svg';
import Smoke from '../../assets/smoke.png';
import DarkLogo from '../../assets/pacot-logo.svg';
import LightLogo from '../../assets/pacot-logo-drk.svg';
function LandingPage () {
    const { darkMode } = useDarkMode();

    return (
        <>
            <div className={`landing-wrapper ${darkMode ? 'light' : 'dark'}`}>
                <div className='landing-header'>
                    <p className={darkMode ? 'light' : 'dark'}>Hi I am</p>
                    <img src={DarkLogo} alt="logo" className={darkMode ? 'light-mode' : 'dark-mode'}/>
                    <img src={LightLogo} alt="logo" className={darkMode ? 'dark-mode' : 'light-mode'}/>
                    <img src={Smoke} className="smoke"/>
                    <p className="title"><span>UI/UX</span> DESIGNER | <span>FRONT-END</span> DEVELOPER</p>
                </div>
                <img src={Model} className='landing-model'/>
            </div>
        </>
    )
}

export default LandingPage;