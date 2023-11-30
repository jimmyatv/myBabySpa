import React from "react";
import "./Newsletter.css";
import showerBaby from "../../assets/showerBaby.jpg";
import { GiBabyBottle } from "react-icons/gi";

const Newsletter = () => {
  return (
    <div className="newsletter relative">
      <img src={showerBaby} alt="" />
      <span className="baby-n"><GiBabyBottle /></span>
      <div className="our-newletter">
        <div className="newsletter-form">
          <h2>Pošaljite nam mail <br/> i mi ćemo Vas kontaktirati</h2>
          <form className="form" action="">
            <input
              type="email"
              name="user_email"
              placeholder="Vaše ime"
              required
            />
            <input
              type="text"
              name="number"
              placeholder="Vaš broj"
              required
            />
            <button className="btn btn-newsletter">Kontaktirajte nas</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
