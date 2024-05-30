import React from 'react'
import coverPhoto from '../../assets/coverPhoto.jpg'
import photoController from '../../assets/photoController.jpg'
import './about.css'

const About = () => {
  return (
    <div className='about-wrapper'>
        <header className='about-header'>
            <p>Rene Trevino</p>
        </header>
        <section className='about-container'>
            <div className='img-container'>
                <img src={ coverPhoto } alt="" />
            </div>
            <div className='about-content'>
                <p>Rene is a web developer from San Antonio, Texas.
                     He has been working in web development since early 2020, 
                     initially specializing in the MERN stack and then expanding into other stacks and types of development, 
                     ranging from WordPress to game development. Rene loves all things involving problem-solving, so feel free 
                     to contact him for any problems that need to be solved.
                </p>
            <div className='content-img-container'>
                <img src={ photoController } alt="" />
            </div>
            </div>

        </section>
    </div>
  )
}

export default About