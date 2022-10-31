import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/miguel-pereira-5b4317196/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Miguelcp65" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/migueu.65/" target="_blank">
        <AiFillInstagram />
      </a>
    </div>
  )
}

export default HeaderSocials
