import React from 'react';
import { motion } from 'framer-motion';
import './portfolio.css';
import IMG1 from '../../assets/portfolio-1.png';
import IMG2 from '../../assets/portfolio-8.png';
import IMG3 from '../../assets/portfolio2.png';
import IMG4 from '../../assets/portfolio-3.png';
import IMG5 from '../../assets/portfolio-2.png';
import IMG6 from '../../assets/portfolio-4.png';
import IMG7 from '../../assets/portfolio-5.png';
import IMG8 from '../../assets/portfolio-6.png';
import IMG9 from '../../assets/portfolio-7.png';
import IMG10 from '../../assets/portfolio-9.png';
import { fadeIn } from '../../vaariants';


const data= [
  {
    id:1,
    image: IMG1,
    title:'This is a my react portfolio',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://portfolio.amirhamzadev.com/'
  },
  {
    id:2,
    image: IMG2,
    title:'This is a portfolio',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://amirhamzadev.com/'
  },
  {
    id:3,
    image: IMG3,
    title:'FullStack E-Commerce Website',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://farmart-amir.netlify.app'
  },
  {
    id:4,
    image: IMG4,
    title:'This is a legal legacy website',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://legal-amir.netlify.app/'
  },
  {
    id:5,
    image: IMG5,
    title:'This is a restaurant website',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://amirhamza-rest.netlify.app'
  },
  {
    id:6,
    image: IMG6,
    title:'This is a business website',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://amirhamza-business.netlify.app'
  },
  {
    id:7,
    image: IMG7,
    title:'This is a form filter website',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://form-site-1.netlify.app/'
  },
  {
    id:8,
    image: IMG8,
    title:'Current time and date showing site',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://amir-analogclock.netlify.app'
  },
  {
    id:9,
    image: IMG9,
    title:'This is a business website',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://amirhamza-zeppto.netlify.app'
  },
  {
    id:10,
    image: IMG10,
    title:'This is a netflix clone website',
    github:'https://github.com/freelancer-amirhamza',
    demo:'https://littlenetflix.netlify.app'
  },
];

const Portfolio = () => {
  
  
  return (
    <section id="portfolio">
    <motion.h5
       variants={fadeIn('down', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7 }}>My Recent Work</motion.h5>
    
    <motion.h2
       variants={fadeIn('down', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7 }}>Portfolio</motion.h2>

    <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.3 }} className="container portfolio-container">
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
    </motion.div>
    </section>
  )
}

export default Portfolio