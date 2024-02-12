import React from "react";
import CV from '../../assets/cv.pdf';
import { motion } from "framer-motion";
import { fadeIn } from "../../vaariants";


const CTA = () => {
  return (
    <div className="cta">
      <motion.a
       variants={fadeIn('right', 0.5)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.5 }}
      href={CV} className="btn" download > Download CV</motion.a>
      <motion.a 
       variants={fadeIn('left', 0.5)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.5 }}
      href="#contact" className="btn btn-primary"> Let's Talk</motion.a>
    </div>
  );
};

export default CTA;
