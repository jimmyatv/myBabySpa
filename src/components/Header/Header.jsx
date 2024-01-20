import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logoBaby.png";
import navBarData from "../../data/navBarData";

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


  // * Fixed nav bar
  const fixedNavBar = () => {
    if(window.scrollY >= 200){
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', (fixedNavBar));

    return () => {
      window.addEventListener('scroll', (fixedNavBar));
    }
  },[]);

  return (
    <div className={`header ${navBar ? 'header navBar-active' : 'header'}`}>
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
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="working-hours">
          <span>
            {" "}
            <strong>+ 381 60 411 29 83</strong>{" "}
          </span>
          <span>Pon - Pet od 11:00 do 19:00</span>
          <span>Subota od 10:00 do 14:00</span>
        </div>
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
  );
};

export default Header;
