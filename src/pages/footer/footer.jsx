import './footer.css';
import Logo from '../../assets/pacot-logo.svg';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';
import LinkedIn from '../../assets/LinkedIn.svg';
import TikTok from '../../assets/TikTok.svg';
import Github from '../../assets/GitHub.svg';
import Jobstreet from '../../assets/Jobstreet.svg';

function Footer () {
    return (
        <>
            <footer className='footer-wrapper'>
                <a href="#home" className='footer-logo'>
                    <img src={Logo} alt="logo" />
                </a>
                <div className='social-media-links'>
                    <a href="https://ph.jobstreet.com/profile/evane-pacot-r8yGs9PNjJ" target="_blank">
                        <img src={Jobstreet} alt='Jobstreet'/>
                    </a>
                    <a href="https://www.linkedin.com/in/evane-pacot-260b85341" target="_blank">
                        <img src={LinkedIn} alt='LinkedIn'/>
                    </a>
                    <a href="https://www.facebook.com/evane.pacot/" target="_blank">
                        <img src={Facebook} alt='Facebook'/>
                    </a>
                    <a href="https://www.instagram.com/evn_dc_pct/" target="_blank">
                        <img src={Instagram} alt='Instagram'/>
                    </a>
                    <a href="https://github.com/Minyoui" target="_blank">
                        <img src={Github} alt='Github'/>
                    </a>
                    <a href="https://www.tiktok.com/@evn_dc_pct?_t=ZS-8ygNdbrePSi&_r=1" target="_blank">
                        <img src={TikTok} alt='TikTok'/>
                    </a>
                </div>
                <p className='copyright'>© Evane Pacot 2025. All rights reserved. Icons by <a href='https://icons8.com/' target="_blank">Icons8</a></p>
            </footer>
        </>
    )
}

export default Footer;