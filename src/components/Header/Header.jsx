import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logoBaby.png";
import navBarData from "../../data/navBarData";
import { FaPhoneVolume, FaClock } from "react-icons/fa6";

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const navBarLinksRef = useRef(null);
  const burgerButtonRef = useRef(null);
  const [navBar, setNavBar] = useState(false);

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




  //! SENIOR style
  // const fixedNavBar = () => {
  //   setNavBar(window.scrollY > 0)
  // } // Ako window.scrollY > 0, postaviće se true, inače false.

  useEffect(() => {
    // * Fixed nav bar
    const fixedNavBar = () => {
      let scroll = window.scrollY > 0

      if (scroll > 0) {
        setNavBar(true)
      } else {
        setNavBar(false)
      }
    };

    fixedNavBar();

    window.addEventListener('scroll', (fixedNavBar));

    return () => {
      window.removeEventListener('scroll', (fixedNavBar));
    }
  }, []);

  return (
    <div className={`header ${navBar ? 'navBar-active' : ''}`}>
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
                  <a style={{fontWeight:"500"}} onClick={handleBurgerClick} href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="working-hours">
          <a href="tel:+381604112983"><span>+381604112983</span><FaPhoneVolume /></a>
          <a href="#footer"><span>Radno vreme</span><FaClock /></a>
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
    </div>
  );
};

export default Header;
