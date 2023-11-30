import React from 'react';
import './Footer.css';
import babyLogoWhite from '../../assets/babyLogoWhite.svg'
import Header from '../Header/Header';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo-white">
            <img src={babyLogoWhite} alt="" />
        </div>
        <Header/>
    </div>
  )
};

export default Footer;