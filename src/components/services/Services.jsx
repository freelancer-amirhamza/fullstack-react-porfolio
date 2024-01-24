import React from 'react';
import './services.css';
import { FaRegCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service-container">
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
      </div>
    </section>
  )
}

export default Services