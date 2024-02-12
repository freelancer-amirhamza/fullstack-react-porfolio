import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion"; 
import { fadeIn } from "../../vaariants";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header>
      <motion.div
        
        className="container header_container">
          <motion.div 
           variants={fadeIn('down', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false, amount:0.7 }}
          >
        <h5 className="title">Hello I am</h5>
        <h1 className="name">AMIR HAMZA</h1>
        <TypeAnimation
              sequence={[
                "web developer",
                2000,
                "front-end developer",
                2000,
                "digital marketer",
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              className="text-light post"
            />
        
        </motion.div>
        <CTA />
        <HeaderSocials/>
        <motion.div
         variants={fadeIn('up', 0.6)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false, amount:0.7 }}
        className="me">
          <img src={ME} alt="Amir Hamza" />
        </motion.div>
        <a href="#contact" className="scroll-down"> Scroll Down</a>
      </motion.div>
    </header>
  );
};

export default Header;
