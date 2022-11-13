import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { useState } from 'react'

import ReactTooltip from 'react-tooltip'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        data-tip="Home"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
      <a
        data-tip="About"
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaRegUser />
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
      <a
        data-tip="Experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        href="#experience"
      >
        <MdOutlineWorkOutline />
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
      <a
        data-tip="Portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
        href="#portfolio"
      >
        <BsFillJournalBookmarkFill />
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
      <a
        data-tip="Contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        href="#contact"
      >
        <AiOutlineMessage />
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
    </nav>
  )
}

export default Nav
