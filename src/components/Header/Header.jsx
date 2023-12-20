import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/babyLogo.svg";
import navBarData from "../../data/navBarData";

const Header = () => {
  // Dodao useState za pracenje stanja aktivnosti burger menija
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  // Dodao funkciju za rukovanje klikom na burger meni
  const handleBurgerClick = () => {
    setIsBurgerActive((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="navBar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div
          className={`navBar-links ${isBurgerActive ? "is-active" : ""}`}
          id="navBarLinks"
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
        {/* Dodao event handler za burger klik */}
        <button
          className={`burger ${isBurgerActive ? "is-active" : ""}`}
          id="burgerMenu"
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
