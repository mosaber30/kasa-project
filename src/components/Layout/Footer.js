import logoFooter from '../../styles/img/logo-kasa-footer.png'
import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
        <img src={logoFooter} alt='logo kasa' className='footer_logo' />
        <p className='footer_text'>© 2024 Kasa. All rights reserved</p>
    </footer>
    );
  }
  
  export default Footer;