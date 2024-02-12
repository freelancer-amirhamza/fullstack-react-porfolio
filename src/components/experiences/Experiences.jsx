import React from 'react'
import { motion } from 'framer-motion';
import './experiences.css';
import { FaCircleCheck } from "react-icons/fa6";
import { fadeIn } from '../../vaariants';

const Experiences = () => {
  return (
    <section id="experience">

      <motion.h5
       variants={fadeIn('down', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7 }}>What I Have Skills</motion.h5>
      <motion.h2
       variants={fadeIn('down', 0.6)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7 }}>Experiences</motion.h2>
      <div className="container experience-container">
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}} className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <FaCircleCheck className='experience-details-icon' />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <FaCircleCheck className='experience-details-icon' />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <FaCircleCheck className='experience-details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <FaCircleCheck className='experience-details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <FaCircleCheck className='experience-details-icon' />
              <div>
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <FaCircleCheck className='experience-details-icon' />
              <div>
              <h4>React Js</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </motion.div>

{/* ======================= Backend Experience ================ */}

        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        className="experience-backend">
        <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <FaCircleCheck className='experience-details-icon' />
              <div>
              <h4>Node JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <FaCircleCheck className='experience-details-icon' />
              <div>
              <h4>Firebase</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <FaCircleCheck className='experience-details-icon' />
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience-details">
              <FaCircleCheck className='experience-details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experiences