import React from 'react'
import './about.css';
import { motion } from 'framer-motion';
import ME from '../../assets/me-about.png';
import { FaAward } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { MdLibraryAddCheck } from "react-icons/md"
import { fadeIn } from '../../vaariants';

function About() {
  return (
    <section id="about">
      <motion.h5
       variants={fadeIn('down', 0.5)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7 }}
      >Go To Know</motion.h5>
      <motion.h2
       variants={fadeIn('down', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7 }}>About Me</motion.h2>
      
      <div className="container about_container">
        <motion.div
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.5 }}
        className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Amir Hamza" />
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}} className="about-content">
        <div className="about-cards">
          <article className="about-card">
            <FaAward className='about-icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className="about-card">
            <FaUserFriends className='about-icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>

          <article className="about-card">
            <MdLibraryAddCheck className='about-icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa nesciunt
            aspernatur et odit quidem deleniti numquam aliquid hic praesentium.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </motion.div>

      </div>
    </section>
  )
}

export default About