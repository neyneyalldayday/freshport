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
   console.log(items[currentSlide].description)
  return (
    <div className="slider">
      <button onClick={goToPreviousSlide}>Previous</button>
        <div className="slide-container">
          <section className='project-info'>
              <p>{items[currentSlide].full_name.split("/")[1]}</p>        
              <p>{items[currentSlide].description}</p>       
          </section>
          <section className='project-links'>
            <a href={items[currentSlide].deployments_url} target="_blank" rel="noopener noreferrer">deployed site</a>
            <a href={items[currentSlide].homepage_url} target="_blank" rel="noopener noreferrer">repo</a>
          </section>   
        </div>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Slider;