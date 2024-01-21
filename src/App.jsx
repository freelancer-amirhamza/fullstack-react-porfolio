import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import Experiences from  './components/experiences/Experiences';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'



function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiences/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App