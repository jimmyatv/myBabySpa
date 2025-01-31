import React from "react";
import "./Plans.css";
import { GoCheckCircle } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import plansData from "../../data/plansData";

const Plans = () => {
  return (
    <div className="plans">
      <span className="anchor" id="plans"></span>

      <h2 className="main-text">Opustite se zajedno!</h2>
      <div className="features container">
        {plansData.map((plan, idx) => {
          return (
            <div className="plan" key={idx}>
              <span>{plan.image}</span>
              <span>{plan.name}</span>
              <span>{plan.price}</span>
              <div className="my-plans">
                <p><strong>Trajanje:</strong>{plan.time}</p>
                <p><strong>Opis:</strong>{plan.description}</p>
                <p><strong>Idealno za:</strong>{plan.bestFor}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
