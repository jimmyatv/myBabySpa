import React, { useState } from 'react';
import { FaRegMessage } from 'react-icons/fa6';
import { FaPhoneAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import './DropDown.css';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropDown'>
      <div className={`list ${isOpen ? 'is-active' : ''}`}>
        <a target='_blank' rel="noreferrer" href="https://www.facebook.com/profile.php?id=61557216536102&mibextid=ZbWKwL" className={`btn-style ${isOpen ? 'a-active' : ''}`}><FaFacebookF/></a>
        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/littleonebabyspa_nis?igsh=MW1qMWl1Z2dhdHRtag==" className={`btn-style ${isOpen ? 'a-active' : ''}`}><FaInstagram /></a>
        <a target='_blank' rel="noreferrer" href="mailto:rasic.alexandar@gmail.com" className={`btn-style ${isOpen ? 'a-active' : ''}`}><GoMail /></a>
        <a target='_blank' rel="noreferrer" href="tel:+381604112983" className={`btn-style ${isOpen ? 'a-active' : ''}`}><FaPhoneAlt /></a>
      </div>
      <div className={`btn-style ${isOpen ? 'clicked' : ''}`} onClick={handleButtonClick}>
        <FaRegMessage />
      </div>
    </div>
  );
};

export default DropDown;
