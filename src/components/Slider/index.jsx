import React, { useState } from 'react';
import './Slider.css'; // Make sure to import your CSS file

const Slider = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0? items.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === items.length - 1? 0 : prevSlide + 1));
  };

  return (
    <div className="slider">
    <button onClick={goToPreviousSlide}>Previous</button>
    <div className="slide-container">
      <section className='project-info'>
        <p>{items[currentSlide].type}</p>  
        <p>{items[currentSlide].title}</p> 
        <p>{items[currentSlide].description}</p>
      </section>
      <section className='project-links'>
        <img src={items[currentSlide].img}/>
        <a href={items[currentSlide].link} target="_blank" rel="noopener noreferrer">View Project</a>
      </section>   
    </div>
    <button onClick={goToNextSlide}>Next</button>
  </div>
  );
};

export default Slider;