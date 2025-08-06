import './about.css';
import CV from '../../assets/CV.svg';
import { useDarkMode } from '../../context/DarkModeContext';

function AboutPage () {
    const { darkMode } = useDarkMode();

    return (
        <>
            <div className="about-wrapper" id="about">
                <p className={`abt-title-container ${darkMode? 'light' : 'dark'}`}>ABOUT-<strong>ME</strong></p>
                <div className='abt-description-container'>
                    <p className='about-desc'>
                    Through my diverse experiences, I have cultivated a strong <span>work ethic</span> and an <span>eagerness to learn</span> and <span>adapt to new challenges</span>.
                    My goal is to contribute meaningfully to projects that blend <span>innovation, aesthetic</span> and <span>functionality</span>. 
                    I thrive in environments where I can collaborate with others and continue to grow as a professional.
                    </p>
                    <img src={CV} alt="Curriculum-Vitae"/>
                </div>
            </div>
        </>
    )
}

export default AboutPage;