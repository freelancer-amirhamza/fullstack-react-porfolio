import React from 'react';
import './nav.css';
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import{useState} from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState ("#")
  return (
   <nav>
    <div className="nav">
    <a href="# " 
      onClick={() => setActiveNav("#")}
      className={activeNav === "#" ? "active" : ""}
    ><IoHome /></a>
    <a href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
    ><FaUser /></a>
    <a href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : " "}
    ><FaBook /></a>
    <a href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : " "}
    ><MdMedicalServices /></a>
    <a href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : " "}
    ><MdMessage /></a>
    </div>
   </nav>
  )
}

export default Nav