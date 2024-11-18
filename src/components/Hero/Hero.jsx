import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import { motion } from "framer-motion";
// import mainBaby from "../../assets/mainBaby.png";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="hero">
      <Header />
      {/* maikn-hero */}
      <div className="hero-main">
        <div className="the-best-babyspa">
          <motion.div
            initial={{ left: "180px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>
            {" "}
            Najbolji <span>baby spa</span> u gradu{" "}
          </span>
        </div>
        <div className="hero-text">
          <h1>Little One Baby Spa – Vaše mesto za nežnu brigu i opuštanje!</h1>
          <p>Razvojne vežbe uz masažu i hidroterapiju za bebe i decu</p>
          <a className="btn" href="#newsletter">Pišite nam</a>
        </div>
        {/* <img className="main-baby-photo" src={mainBaby} alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
