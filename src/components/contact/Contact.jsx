import React from 'react'
import './contact.css';
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_24791yt', 'template_075ox5r', form.current, 'aRfaOYmx8PfQjgxEW')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    })

    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>amirhamza27940@gmail.com</h5>
            <a href="mailto:amirhamza27940@gmail.com" target='blank' >Send Email</a>
          </article>
          <article className="contact-option">
            <BsMessenger className='contact-option-icon'/>
            <h4>Messenger</h4>
            <h5>Amir Hamza</h5>
            <a href="https://m.me/Amirhamza.Dev" target='blank' >Send Message</a>
          </article>
          <article className="contact-option">
            <IoLogoWhatsapp className='contact-option-icon'/>
            <h4>Whatsapp </h4>
            <h5>+8801792978577</h5>
            <a href="https://api.whatsapp.com/send?phone+8801792978577">Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" id="name" placeholder='Your Full Name' required />
          <input type="email" name="email" id="email" placeholder='Your Email' required />
          <textarea name="message" id=""  rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact