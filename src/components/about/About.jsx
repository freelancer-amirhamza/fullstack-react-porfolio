import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { MdLibraryAddCheck } from "react-icons/md"

function About() {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Amir Hamza" />
          </div>
        </div>
        <div className="about-content">
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
        </div>

      </div>
    </section>
  )
}

export default About