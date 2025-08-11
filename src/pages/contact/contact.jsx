import './contact.css';
import { useDarkMode } from '../../context/DarkModeContext';
import EmailIcon from '../../assets/Email.svg';
import PhoneIcon from '../../assets/Phone.svg';
import EmailIconDark from '../../assets/Email-dark.svg';
import PhoneIconDark from '../../assets/Phone-dark.svg';
import SendIcon from '../../assets/Send.svg';
import SendIconDark from '../../assets/SendDark.svg';
import AddressIcon from '../../assets/Address.svg';
import AddressIconDark from '../../assets/AddressDark.svg';

function Contact () {
    const { darkMode } = useDarkMode();
    return (
        <>
            <div className='contact-wrapper' id='contact'>
                <h1 className={`contact-title ${darkMode? 'light' : 'dark'}`}>CONTACT ME</h1>
                <div className='contact-container'>
                    <div className='contact-info'>
                        {/* PHONE */}
                        <div className={`phone ${darkMode? 'light' : 'dark'}`}>
                            <img src={PhoneIcon} alt='Phone' id='light'/>
                            <img src={PhoneIconDark} alt='Phone' id='dark'/>
                            <p>(+63) 947-631-8165</p>
                        </div>
                        {/* EMAIL */}
                        <div className={`email ${darkMode? 'light' : 'dark'}`}>
                            <img src={EmailIcon} alt='Email' id='light'/>
                            <img src={EmailIconDark} alt='Email' id='dark'/>
                            <p>evanepacot2002@gmail.com</p>
                        </div>
                        {/* ADDRESS */}
                        <div className={`address ${darkMode? 'light' : 'dark'}`}>
                            <img src={AddressIcon} alt='Address' id='light'/>
                            <img src={AddressIconDark} alt='Address' id='dark'/>
                            <p>Imus City, Cavite</p>
                        </div>
                    </div>
                    <div className={`contact-line-splitter ${darkMode? 'light' : 'dark'}`}/>
                    <form className={`contact-form ${darkMode? 'light' : 'dark'}`}> 
                        <input 
                            type='text'
                            placeholder='Enter Your Full Name'
                            required
                        />
                        <input 
                            type='email'
                            placeholder='Enter Your Email'
                            required
                        />
                        <div className={`message-box ${darkMode? 'light' : 'dark'}`}>
                            <textarea 
                            placeholder='Get in touch...'
                            required
                            />
                            <button type='submit'>
                                <img src={SendIcon} id="light"/>
                                <img src={SendIconDark} id="dark"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;