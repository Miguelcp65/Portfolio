import React from 'react'
import './footer.css'
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Miguel Pereira
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/miguel-pereira-5b4317196/">
          <AiOutlineLinkedin />
        </a>
        <a href="https://www.instagram.com/migueu.65/">
          <AiOutlineInstagram />
        </a>
        <a href="https://api.whatsapp.com/send?phone=351919748568">
          <AiOutlineWhatsApp />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Miguel Pereira. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer
