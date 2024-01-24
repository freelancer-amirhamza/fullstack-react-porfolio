import React from 'react'
import './experiences.css';
import { FaCircleCheck } from "react-icons/fa6";

const Experiences = () => {
  return (
    <section id="experience">
      <h5>What I Have Skills</h5>
      <h2>Experiences</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
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
        </div>

{/* ======================= Backend Experience ================ */}

        <div className="experience-backend">
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
        </div>
      </div>
    </section>
  )
}

export default Experiences