import React from 'react'
import { FaDribbbleSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com" target='_blank'><FaGithubSquare /></a>
        <a href="https://dribble.com" target='_blank'><FaDribbbleSquare /></a>
    </div>
  )
}

export default HeaderSocials