import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer
 = () => {
  return (
    <>
        <footer className="site-footer">
      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <p>&copy; 2023 Rene Trevino</p>
    </footer>
    </>
  )
}

export default Footer
