import { React, useState } from "react";
import "./Testemonials.css";
import testemonialsData from "../../data/testemonialsData";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Testemonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testemonialsData.length;

  return (
    <div className="testemonials">
      <span className="anchor" id="testemonials"></span>
      <div className="left-t">
        <span>Testemonials</span>
        <span className="stroke-text"> Sta oni</span>
        <span> kazu o nama</span>
        <span>{testemonialsData[selected].review}</span>
        <span>{testemonialsData[selected].name}</span>
      </div>

      <div className="right-t relative">
        <div></div>
        <div></div>
        <img src={testemonialsData[selected].image} alt="" />
        <div className="arrows">
          <span
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          >
            <SlArrowLeft />
          </span>
          <span
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          >
            <SlArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
