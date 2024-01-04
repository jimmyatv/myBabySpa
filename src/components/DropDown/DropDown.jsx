import {React, useState} from 'react';
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt, FaInstagram, FaFacebookF } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import './DropDown.css';

const DropDown = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='dropDown'>
        <div className={`list ${isOpen ? 'is-active' : ''}`}>
            <a href="/" className={`btn-style ${isOpen ? 'a-active' : ''}`}><FaFacebookF/></a>
            <a href="/" className={`btn-style ${isOpen ? 'a-active' : ''}`}><FaInstagram /></a>
            <a href="/" className={`btn-style ${isOpen ? 'a-active' : ''}`}><GoMail /></a>
            <a href="/" className={`btn-style ${isOpen ? 'a-active' : ''}`}><FaPhoneAlt /></a>
        </div>
        <div className='btn-style' onClick={() => {setIsOpen(!isOpen)}}><FaRegMessage /></div>
    </div>
  )
};

export default DropDown;