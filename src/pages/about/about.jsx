import './about.css';
import { useDarkMode } from '../../context/DarkModeContext';
import EditIcon from '../../assets/Edit.svg';
import PaintIcon from '../../assets/Paint.svg';
import BoltIcon from '../../assets/Bolt.svg';
import EditIconDark from '../../assets/Edit-dark.svg';
import PaintIconDark from '../../assets/Paint-dark.svg';
import BoltIconDark from '../../assets/Bolt-dark.svg';

import SpotlightCard from '../components/SpotlightCard';
import DecryptedText from '../components/DecryptedText';

function AboutPage () {
    const { darkMode } = useDarkMode();

    const AboutText = [
        {
            text: "Hello"
        }
    ];

    return (
        <>
            <div className={`about-wrapper ${darkMode? 'light' : ''}`} id="about">
                <div className='about-header'>
                    <h1 className={`about-title ${darkMode? 'light' : 'dark'}`}>ABOUT ME</h1>
                    <p className={`about-desc ${darkMode? 'light' : 'dark'}`}>
                        Through my diverse experiences, I have cultivated a strong <span>work ethic</span> and an <span>eagerness to learn</span> and <span>adapt to new challenges</span>.
                        My goal is to contribute meaningfully to projects that blend <span>innovation, aesthetic</span> and <span>functionality</span>. 
                        I thrive in environments where I can collaborate with others and continue to grow as a professional.
                    </p>
                </div>

                <div className='plan-phase-container'>
                    <SpotlightCard 
                        className={`phase-box ${darkMode? 'light' : 'dark'}`}
                        spotlightColor='rgba(254, 252, 113, 0.8)'>
                        <img src={EditIcon} alt='Edit' id='icon-light'/>
                        <img src={EditIconDark} alt='Edit' id='icon-dark'/>
                        <h2>UI & UX</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </SpotlightCard>
                    <SpotlightCard 
                        className={`phase-box ${darkMode? 'light' : 'dark'}`}
                        spotlightColor='rgba(18, 176, 224, 0.8)'>
                        <img src={PaintIcon} alt='Paint' id='icon-light'/>
                        <img src={PaintIconDark} alt='Paint' id='icon-dark'/>
                        <h2>Design & Creative</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </SpotlightCard>
                    <SpotlightCard 
                        className={`phase-box ${darkMode? 'light' : 'dark'}`} 
                        spotlightColor="rgba(224, 45, 18, 0.8)">
                        <img src={BoltIcon} alt='Bolt' id='icon-light'/>
                        <img src={BoltIconDark} alt='Bolt' id='icon-dark'/>
                        <h2>Development</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </SpotlightCard>
                </div>
            </div>
        </>
    )
}

export default AboutPage;