import './contact.css';
import { useDarkMode } from '../../context/DarkModeContext';
import EmailIcon from '../../assets/Email.svg';
import PhoneIcon from '../../assets/Phone.svg';
import EmailIconDark from '../../assets/Email-dark.svg';
import PhoneIconDark from '../../assets/Phone-dark.svg';
import SendIcon from '../../assets/Send.svg';

function Contact () {
    const { darkMode } = useDarkMode();
    return (
        <>
            <div className='contact-wrapper' id="contact">
                <div className={`contact-title ${darkMode? 'light' : 'dark'}`}>
                    <p>GET IN <span>TOUCH</span></p>
                    <div className={`divider-line ${darkMode? 'light' : 'dark'}`} />
                </div>

                <p className={`sub-header ${darkMode? 'light' : 'dark'}`}>
                    I'm always interested in new <span>opportunities</span> and <span>collaborations</span>. 
                    Let's create something amazing <strong>together</strong>.
                </p>

                <form className={`contact-form ${darkMode? 'light' : ''}`}>
                    <input
                        type='email'
                        placeholder='Enter Email Address'
                        required
                    />
                    <button type='submit'>Submit<img src={SendIcon}/></button>
                </form>

                <div className='contact-info'>
                    <div className={`phone ${darkMode? 'light' : 'dark'}`}>
                        <h1>
                            <img src={PhoneIcon} id="light-icon"/>
                            <img src={PhoneIconDark} id="dark-icon"/>
                            Phone
                        </h1>
                        <p>(+63) 947-631-8165</p>
                    </div>
                    <div className={`email ${darkMode? 'light' : 'dark'}`}>
                        <h1>
                            <img src={EmailIcon} id="light-icon"/>
                            <img src={EmailIconDark} id="dark-icon"/>                           
                            Email
                        </h1>
                        <p>evanepacot2002@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;