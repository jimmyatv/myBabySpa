import React from "react";
import "./Footer.css";
import Logo from "../../assets/logoBaby.png";
import navBarData from "../../data/navBarData";
import { FiPhone } from "react-icons/fi";
import { HiOutlineAtSymbol } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const currentYear = new Date().getFullYear();

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
          <span className="anchor" id="footer"></span>
          <div>
            <span>Radno vreme:</span>
            <span>Pon - Pet od 10:00 do 19:00</span>
            <span>Subota i nedelja na upit</span>
            <strong><a style={{ textDecoration: 'none', color: "black" }} href="tel:+381611145300"><FiPhone />+381611145300</a></strong>
            <a style={{ textDecoration: 'none', color: "black", fontWeight:'bold' }} href="mailto:littleonebabyspa@gmail.com">
              <HiOutlineAtSymbol />
              littleonebabyspa@gmail.com
            </a>
          </div>
          <div>
            <p>Sajt razvijen</p>
            <p className="my">Aleksandar Rasic</p>
            <p className="social-footer">
              <a href="https://www.linkedin.com/in/aleksandar-rasic-jimmy/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </p>
          </div>
        </div>
        <p>© {currentYear} Little one baby spa - Sva prava zadržana.</p>
      </div>
    </div>
  );
};

export default Footer;
