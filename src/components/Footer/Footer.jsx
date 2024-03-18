import React from "react";
import "./Footer.css";
import Logo from "../../assets/logoBaby.png";
import navBarData from "../../data/navBarData";
import { FiPhone } from "react-icons/fi";
import { HiOutlineAtSymbol } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wraper container">
        <div className="logo-white">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-bottom">
          <div>
            <ul>
              {navBarData.map((link, idx) => {
                return (
                  <li key={idx}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className="anchor" id="footer"></a>
          <div>
            <span>Radno vreme:</span>
            <span>Pon - Pet od 11:00 do 19:00</span>
            <span>Subota od 10:00 do 14:00</span>
            <strong><a style={{ textDecoration: 'none', color: "black" }} href="tel:+381604112983"><FiPhone />+381604112983</a></strong>
            <span>
              <HiOutlineAtSymbol />
              littleonebabyspa@gmail.com
            </span>
          </div>
          <div>
            <p>Sajt razvijen</p>
            <p>Aleksandar Rasic</p>
            <p className="social-footer">
              <a href="https://www.linkedin.com/in/aleksandar-rasic-jimmy/" target="_blank">
                <FaLinkedin />
              </a>
            </p>
          </div>
        </div>
        <p><FaRegCopyright /> 2024 Little one baby spa <br /> Sva prava zadržana</p>
      </div>
    </div>
  );
};

export default Footer;
