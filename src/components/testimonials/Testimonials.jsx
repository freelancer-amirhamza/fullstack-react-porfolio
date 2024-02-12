import React from 'react';
import { motion } from 'framer-motion';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';


import { Navigation, Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { fadeIn } from '../../vaariants';

const data = [
  {
    id:1,
    name:'Ernest One',
    image:AVTR1,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iure expedita excepturi id quasi voluptates laudantium consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, natus?',
  },
  {
    id:2,
    name:'Ernest One',
    image:AVTR2,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iure expedita excepturi id quasi voluptates laudantium consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, natus?',
  
  },
  {
    id:3,
    name:'Ernest One',
    image:AVTR3,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iure expedita excepturi id quasi voluptates laudantium consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, natus?',
  
  },
  {
    id:4,
    name:'Ernest One',
    image:AVTR4,
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iure expedita excepturi id quasi voluptates laudantium consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, natus?',
  
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <motion.h5
       variants={fadeIn('down', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7 }}>Review From Client</motion.h5>
      
      <motion.h2
       variants={fadeIn('down', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.7 }}>Testimonials</motion.h2>
      <motion.div
      variants={fadeIn('up', 0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.6 }}>
      <Swiper motion

      // install Swiper modules
      modules={[Navigation, Pagination,]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      
      className="container testimonials-container">
        {
          data.map(({id, image, name, review}) => {
          return(
            <SwiperSlide key={id} className="testimonial">
            <div className="client-avatar">
              <img src={image} alt="Amir Hamza" />
            </div>
            <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
          </SwiperSlide>
          )
          })
        }
       
      </Swiper>
      </motion.div>
    </section>
  )
}

export default Testimonials