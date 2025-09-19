import './landing.css';
import { useDarkMode } from '../../context/DarkModeContext';
import Model from '../../assets/Pacot.png';
import TextType from '../components/TextType';

function LandingPage () {
    const { darkMode } = useDarkMode();

    return (
        <>
            <div className={`landing-wrapper ${darkMode? 'light' : 'dark'}`} id='home'> 

                <div className='landing-bg' aria-hidden="true">
                    <div className={`${darkMode? 'light' : 'dark'} side`}>
                        <div className='bg'/>
                    </div>

                    <div className={`${darkMode? 'dark' : 'light'} side`}>
                        <div className='bg'/>
                    </div>
                </div>

                <div className='landing-container'>
                    <img src={Model} alt="Evane Pacot Full Body Profile Picture" aria-hidden="true"/>
                    <div className='landing-title'>
                        <p className={`introduce-text ${darkMode? 'light' : 'dark'}`}>
                            Hi I am
                        </p>
                        <p className={`portfolio-owner ${darkMode? 'light' : 'dark'}`}>
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