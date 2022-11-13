import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="750" className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA