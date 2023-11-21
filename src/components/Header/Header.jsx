import React from "react";
import "./Header.css";
import Logo from "../../assets/babyLogo.svg";
import navBarData from "../../data/navBarData";

const Header = () => {
  return (
    <div className="header">
      <div className="navBar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="navBar-links">
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
          <span> <strong>+ 381 60 411 29 83</strong> </span>
          <span>Pon - Pet od 11:00 do 19:00</span>
          <span>Subota od 10:00 do 14:00</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
