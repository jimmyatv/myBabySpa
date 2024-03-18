import React from "react";
import "./Plans.css";
import { GoCheckCircle } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import plansData from "../../data/plansData";

const Plans = () => {
  return (
    <div className="plans">
      <span className="anchor" id="plans"></span>

      <h2 className="main-text">Zapocni svoju bajku sa nama</h2>
      <div className="features container">
        {plansData.map((plan, idx) => {
          return (
            <div className="plan" key={idx}>
              <span>{plan.image}</span>
              <span>{plan.name}</span>
              <span>{plan.price}</span>
              <div className="my-plans">
                {plan.features.map((feature, idx) => {
                  return (
                    <div className="feature" key={idx}>
                      <span className="tick">
                        <GoCheckCircle />
                      </span>
                      <span>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <span>
                Pridruzi se <FaChevronRight />{" "}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
