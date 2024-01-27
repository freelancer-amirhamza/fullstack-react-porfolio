import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';


const data= [
  {
    id:1,
    image: IMG1,
    title:'This is a portfolio',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://github.com/freelancer-amirhamza?tab=repositories'
  },
  {
    id:1,
    image: IMG2,
    title:'This is a portfolio',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://github.com/freelancer-amirhamza?tab=repositories'
  },
  {
    id:1,
    image: IMG3,
    title:'This is a portfolio',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://github.com/freelancer-amirhamza?tab=repositories'
  },
  {
    id:1,
    image: IMG4,
    title:'This is a portfolio',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://github.com/freelancer-amirhamza?tab=repositories'
  },
  {
    id:1,
    image: IMG5,
    title:'This is a portfolio',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://github.com/freelancer-amirhamza?tab=repositories'
  },
  {
    id:1,
    image: IMG6,
    title:'This is a portfolio',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://github.com/freelancer-amirhamza?tab=repositories'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio-container">
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={image} alt="Amir Hamza" />
            </div>
            <h3>{title} </h3>
            <div className="portfolio-item-cta">
            <a href={github} className='btn' target='blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }
    </div>
    </section>
  )
}

export default Portfolio