import React from "react";
import projectArray from "../../data/projectData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../SliderArrows";
import './projects.css'

const Projects = () => {
  console.log(projectArray);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow/>,
    PrevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="slider-wrapper">
      <section className="slider-container">
        <Slider className="my-slider" {...sliderSettings}>
          {projectArray.map((project, index) => (
            <div key={index} className="project-card" >
              <h3>{project.type}</h3>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">check it out</a>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Projects;
