import React from "react";
import "./Reasons.css";
import { AiOutlineAlert } from "react-icons/ai";
import { GiFootprint } from "react-icons/gi";
import { IoSparklesOutline } from "react-icons/io5";

const Reasons = () => {
  return (
    <div className="reasons">
      <div className="reasons-l">
        <span><IoSparklesOutline />Razvoj motornih sposobnosti</span>
        <span><IoSparklesOutline />Podrška zdravom rastu I razvoju deteta</span>
        <span><IoSparklesOutline />Poboljšava cirkulaciju</span>
        <span><IoSparklesOutline />Aktivira rad mozga</span>
        <span><IoSparklesOutline />Utiče na pravilan rad nervnog sistema</span>
        <span><IoSparklesOutline />Umirujuči efekat</span>
        <span><IoSparklesOutline />Umanjuje grčeve kod beba</span>
      </div>
      <div className="reasons-r relative">
        <div className="important container relative">
          <h3>Važno</h3>
          <span className="alert icon"><AiOutlineAlert /></span>
          <p>
            Regularna masaža i vežbice umanjuju probleme sa hipertonusom,
            tortikolisom, koje mogu da dovedu do različitih patologija:
            skolioze, kifoze, ravnih stopala, displazije zglobova, rahitisa i
            drugih patologija
          </p>
        </div>
          <div className="babyFoot"><GiFootprint /></div>
      </div>
    </div>
  );
};

export default Reasons;
