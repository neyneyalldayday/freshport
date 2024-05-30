import React from 'react'
import coverPhoto from '../../assets/coverPhoto.jpg'
import './about.css'

const About = () => {
  return (
    <div className='about-wrapper'>
        <header className='about-header'>
            <p>Rene Trevino</p>
            <p>Web Developer</p>
        </header>
        <section className='about-container'>
            <div className='img-container'>
                <img src={ coverPhoto } alt="" />
            </div>
            <div className='about-content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi commodi aspernatur 
                    blanditiis veniam libero, vitae alias, aliquid voluptatem tempora quos inventore, culpa harum
                     debitis! Veritatis sit delectus tenetur ratione expedita reprehenderit. Sunt ad expedita alias 
                     id neque quam quod, nostrum minus eveniet repudiandae numquam praesentium odit asperiores voluptatem ipsam.
                </p>
            </div>

        </section>
    </div>
  )
}

export default About