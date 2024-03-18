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
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '8%', 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '4%',
        },
      },
    ],
  };

  return (
    <div className="programs">
      <span className="anchor" id="programs"></span>
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
