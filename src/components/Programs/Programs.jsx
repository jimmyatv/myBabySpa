import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Programs.css";
import programsData from "../../data/programsData";

const Programs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="programs">
      <h2 className="stroke-text main-text">Naši programi</h2>
      <Slider {...settings} className="our-programs">
        {programsData.map((program, idx) => (
          <div className="program" key={idx}>
            <span>{program.image}</span>
            <h3>{program.title}</h3>
            <span>{program.description}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Programs;
