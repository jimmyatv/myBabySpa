import React from "react";
import "./Footer.css";
import babyLogoWhite from "../../assets/babyLogoWhite.svg";
import Header from "../Header/Header";
import { FiPhone } from "react-icons/fi";
import { HiOutlineAtSymbol } from "react-icons/hi2";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wraper container">
        <div className="logo-white">
          <img src={babyLogoWhite} alt="" />
        </div>
        <div className="footer-bottom">
          <div>
            <span>Radno vreme:</span>
            <span>Pon - Pet od 11:00 do 19:00</span>
            <span>Subota od 10:00 do 14:00</span>
            <span>
              <FiPhone />+ 381 69 233 69 23
            </span>
            <span>
              <HiOutlineAtSymbol />
              info@babyspa.rs
            </span>
          </div>
          <div>
            <span className="social-footer">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </span>
            <p>
              <FaRegCopyright /> Sva prava su zadržana
            </p>
          </div>
          <div>
            <p>Sajt razvijen</p>
            <p>Aleksandar Rasic</p>
            <span className="social-footer">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
