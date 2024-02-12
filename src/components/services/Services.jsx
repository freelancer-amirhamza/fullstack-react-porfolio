import React from 'react';
import './services.css';
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../vaariants';

const Services = () => {
  return (
    <section id="services">
      <motion.h5
       variants={fadeIn('down', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7 }}>What I Offer</motion.h5>
      
      <motion.h2
       variants={fadeIn('down', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7 }}>Services</motion.h2>
      <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.3 }}
      
      className="container service-container">
        {/* UI/UX  */}
        <article className="service">
          <div className="service-head">
            <h5>UI/UX Designer</h5>
          </div>
          <ul className="service-list">
          <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service-head">
            <h5>Web Development</h5>
          </div>
          <ul className="service-list">
          <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION */}
        <article className="service">
          <div className="service-head">
            <h5>Content Creation</h5>
          </div>
          <ul className="service-list">
          <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <FaRegCheckCircle className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </motion.div>
    </section>
  )
}

export default Services