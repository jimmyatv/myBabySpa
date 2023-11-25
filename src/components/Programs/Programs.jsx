import React from "react";
import "./Programs.css";
import programsData from "../../data/programsData";

const Programs = () => {
  return (
    <div className="programs">
      <h2 className="stroke-text main-text">Naši programi</h2>
      <div className="our-programs">
        {programsData.map((program, idx) => {
          return (
            <div className="program" key={idx}>
              <span>{program.image}</span>
              <h3>{program.title}</h3>
              <span>{program.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
