import './about.css';
import CV from '../../assets/CV.svg';

function AboutPage () {
    return (
        <>
            <div className="about-wrapper">
                <p className='about-desc'>
                    Through my diverse experiences, I have cultivated a strong <strong>work ethic</strong> and an <strong>eagerness to learn</strong> and <strong>adapt to new challenges</strong>.
                    My goal is to contribute meaningfully to projects that blend <strong>innovation, aesthetic</strong> and <strong>functionality</strong>. 
                    I thrive in environments where I can collaborate with others and continue to grow as a professional.
                </p>
                <img src={CV} alt="Curriculum-Vitae"/>
            </div>
        </>
    )
}

export default AboutPage;