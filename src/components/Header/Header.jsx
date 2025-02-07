import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logoBaby.png";
import navBarData from "../../data/navBarData";
import { FaPhoneVolume, FaClock } from "react-icons/fa6";
import { motion } from 'framer-motion';
import {headerVariants} from '../../data/motion';


const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const navBarLinksRef = useRef(null);
  const burgerButtonRef = useRef(null);
  const [navBar, setNavBar] = useState(false);
  const [fixedHref, setFixedHref] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerActive((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      navBarLinksRef.current &&
      !navBarLinksRef.current.contains(event.target) &&
      burgerButtonRef.current &&
      !burgerButtonRef.current.contains(event.target)
    ) {
      setIsBurgerActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  useEffect(() => {
    const fixedNavBar = () => {
      setNavBar(window.scrollY > 0);
      setFixedHref(window.scrollY > 0);
    };
  
    window.addEventListener('scroll', fixedNavBar);
  
    return () => {
      window.removeEventListener('scroll', fixedNavBar);
    };
  }, []);
  

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={headerVariants}
      viewport={{ once: false, amount: 0.15 }}
      className={`header ${navBar ? 'navBar-active' : ''}`}>
      <div className="navBar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div
          className={`navBar-links ${isBurgerActive ? "is-active" : ""}`}
          id="navBarLinks"
          ref={navBarLinksRef}
        >
          <ul>
            {navBarData.map((link, idx) => {
              return (
                <li key={idx}>
                  <a className={fixedHref ? 'hrefActive' : ''} style={{ fontWeight: "500" }} onClick={handleBurgerClick} href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="working-hours">
          <a className={fixedHref ? 'hrefActive' : ''} href="tel:+381611145300"><span>+381611145300</span><FaPhoneVolume /></a>
          <a className={fixedHref ? 'hrefActive' : ''} href="#footer"><span>Radno vreme</span><FaClock /></a>
          <button
            className={`burger ${isBurgerActive ? "is-active" : ""}`}
            ref={burgerButtonRef}
            onClick={handleBurgerClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
