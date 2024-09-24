import React from 'react';
import logo from '../../styles/img/logo-kasa.svg'

function Header() {
    return (
        <header className='header'>
        <div className='header_logo'>
            <img src={logo} alt='kasa logo' className='header_logo_img' />
        </div>
        <nav className='header_nav'>
                <ul>
                    <li className='header_nav_link'>Accueil
                    </li>
                    <li className='header_nav_link'>À propos
                    </li>
                </ul>
            </nav>
    </header>
    );
  }
  
  export default Header;