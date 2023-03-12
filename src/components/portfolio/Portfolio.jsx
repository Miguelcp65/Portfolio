import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio V1',
    github: 'https://github.com/Miguelcp65/Portfolio',
    demo: 'https://portfolio-v1-gilt-six.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Fitness App',
    github: 'https://github.com/Miguelcp65/FitnessApp',
    demo: 'https://fitness-app-mu-three.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'WineCulture',
    github: 'https://github.com/Miguelcp65/WineCulture',
    demo: '#',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div data-aos="zoom-in-up" data-aos-duration="950" className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a className="btn" href={github} target="_blank">
                  Github
                </a>
                {<a className="btn btn-primary" href={demo} target="_blank">
                  Demo
                </a> }
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
