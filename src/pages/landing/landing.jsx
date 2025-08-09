import './landing.css';
import { useDarkMode } from '../../context/DarkModeContext';
import Model from '../../assets/Model-one.svg';
import DarkLogo from '../../assets/pacot-logo.svg';
import LightLogo from '../../assets/pacot-logo-drk.svg';
import TextType from '../components/TextType';

function LandingPage () {
    const { darkMode } = useDarkMode();

    return (
        <>
            <div className='landing-wrapper' id='home'> 
                <div className={`${darkMode? 'light' : 'dark'} side`}>
                    <div className='bg'/>
                </div>
                <div className={`${darkMode? 'dark' : 'light'} side`}>
                    <div className='bg'/>
                </div>
                <div className='landing-container'>
                    <img src={Model}/>
                    <div className='landing-title'>
                        <p className={`introduce-text ${darkMode? 'light' : 'dark'}`}>
                            Hi I am
                        </p>
                        <p className='portfolio-owner'>
                            <span className={`${darkMode? 'light' : 'dark'}`}>EVANE</span>
                            <span className={`${darkMode? 'dark' : 'light'}`}>PACOT</span>
                        </p>
                        <p className='role-text'>Web 
                            <TextType 
                                text={[" Designer", " Developer"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </p>
                    </div>
                </div>
                <p className='landing-quote'>
                        Combining Innovation and Aesthetic with Functionality
                </p>
            </div>
            
            
        </>
    )
}

export default LandingPage;