import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {RiAwardLine} from "react-icons/ri"
import {FaUsers} from "react-icons/fa"
import {MdOutlineLibraryBooks} from "react-icons/md"

const About = () => {
  return (
    <section id="about">
    <h5> Get to Know </h5>
    <h2> About Me </h2>

    <div className ="container about__container ">
     <div className = "about__me">
      <div className="about__me-image"> 
       <img src={ME}></img>
      </div>
     </div>

     <div className="about__content">
      <div className ="about__cards">
        <article className="about__card">
         <RiAwardLine className="about__icon"/>
          <h5> Experience </h5>
          <small> Fresher  </small>
        </article>
        <article className="about__card">
         <FaUsers className="about__icon"/>
          <h5> Clients </h5>
          <small> noc clients yet   </small>
        </article>
        <article className="about__card">
         <MdOutlineLibraryBooks className="about__icon"/>
          <h5> Projects  </h5>
          <small> 10+  </small>
        </article>
      </div>
      <p> lorem ipsum dolor sit amet consectetur adipiscing elit bibendum ornare egestas nec cubilia efficitur montes magna in inceptos augue etiam consequat lacinia nibh facilisi felis cras vulputate mauris sagittis sollicitudin</p>
      <a href="#contact" className="btn btn-primary">Let's connect</a>
     </div>

    </div>
    </section>
    
  )
}

export default About