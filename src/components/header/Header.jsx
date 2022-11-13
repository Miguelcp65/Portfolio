import React from 'react'
import './header.css'
import CTA from './CTA'
import img1 from '../../assets/img1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="500"
        className="container header__container"
      >
        <h5>Hi, I'm</h5>
        <h1>Miguel Pereira</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div data-aos="fade-up" data-aos-duration="750" className="img">
          <img src={img1} alt="Miguel Pereira" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
