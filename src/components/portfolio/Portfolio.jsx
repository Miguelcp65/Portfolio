import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'MyTeam',
    github: '',
    demo: '#',
  },
  {
    id: 2,
    image: IMG2,
    title: 'CooknShare',
    github: 'https://github.com/Miguelcp65/cookandshare',
    demo: 'https://dribble.com/Alien_pixels',
  },
  {
    id: 3,
    image: IMG3,
    title: 'WineCulture',
    github: 'https://github.com/Miguelcp65/WineCulture',
    demo: 'https://dribble.com/Alien_pixels',
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
                {/* <a className="btn btn-primary" href={demo} target="_blank">
                  Live Demo (In Progress)
                </a> */}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
