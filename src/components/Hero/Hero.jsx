import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import mainBaby from "../../assets/mainBaby.png";
import { FaFacebookF , FaInstagram  } from "react-icons/fa";

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
          <h1>Baby spa srbija - jedinstvena usluga za bebe i roditelje</h1>
          <p>Hidroterapija i masaža uz razvojne vežbe za bebe i malu decu</p>
          <a href="">Zakazati</a>
        </div>
        <motion.img
          className="main-baby-photo"
          src={mainBaby}
          alt=""
          initial={{ right: "-50rem" }}
          whileInView={{ right: "-10rem" }}
          transition={transition}
        />
        <div className="social">
          <span>Pratite nas na društvenim mrežama</span>
          <span className="social-icon"><FaFacebookF/></span>
          <span className="social-icon"><FaInstagram/></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
