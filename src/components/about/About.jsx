import React from 'react'
import './about.css'
import img2 from '../../assets/img2.jpeg'
import { FaAward, FaGraduationCap } from 'react-icons/fa'
import { AiFillFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img2} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Web Development</h5>
              <small>CTeSP</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed/Scheduled</small>
            </article>
          </div>
          <p>
            As a young adult studying a dregree in Computer Science and
            Engineering, I have ambition to acquire more knowledge in the area
            of Web ​​Development, being this the area that I intend to
            professionalize myself.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
