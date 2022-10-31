import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaRegUser />
      </a>
      <a
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        href="#experience"
      >
        <MdOutlineWorkOutline />
      </a>
      <a
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
        href="#portfolio"
      >
        <BsFillJournalBookmarkFill />
      </a>
      <a
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        href="#contact"
      >
        <AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav
