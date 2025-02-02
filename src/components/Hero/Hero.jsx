import React, { useState } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import heroVideo from "../../assets/heroVideo.mp4"; // Uvezi video

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); 

  const handleVideoLoad = () => {
    setIsVideoLoaded(true); 
  };

  return (
    <div className="hero">
      <Header />
      {/* Video Background */}
      <video 
        className="hero-video" 
        autoPlay 
        loop 
        muted 
        playsInline 
        disablePictureInPicture
        disableRemotePlayback
        onCanPlayThrough={handleVideoLoad}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!isVideoLoaded && (
        <div className="loader"></div>
      )}
      
      {/* Main Hero */}
      <div className="hero-main">
        <div className="the-best-babyspa">
          <motion.div
            initial={{ left: "160px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween", delay: 2 }}
          ></motion.div>
          <span>
            Najbolji <span>baby spa</span> u gradu
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
