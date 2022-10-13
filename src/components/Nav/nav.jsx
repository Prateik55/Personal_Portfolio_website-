import React, {useState} from 'react'
import "./nav.css"

import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {GiStoneCrafting} from "react-icons/gi"
import {RiServiceLine, RiMessage3Line} from "react-icons/ri"

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
   <nav>
    <a href="#" onClick={()=>setActiveNav("#")} className ={activeNav==="#" ? "active" : ""}><AiOutlineHome/></a>
    <a href="#about"onClick={()=>setActiveNav("#about")} className ={activeNav==="#about" ? "active" : ""}><AiOutlineUser/></a>
    <a href="#experience"onClick={()=>setActiveNav("#experience")} className ={activeNav==="#experience" ? "active" : ""}><GiStoneCrafting/></a>
    <a href="#services"onClick={()=>setActiveNav("#services")} className ={activeNav==="#services" ? "active" : ""}><RiServiceLine/></a>
    <a href="#contacts"onClick={()=>setActiveNav("#contacts")} className ={activeNav==="#contacts" ? "active" : ""}><RiMessage3Line/></a>
   </nav>
  )
}

export default Nav;