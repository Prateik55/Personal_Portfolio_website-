import React from 'react'
import "./services.css";
import {BiCheck} from "react-icons/bi";
const Services = () => {
  return (
    <section id="services"> 
      <h5> I Can Help You With </h5>
      <h2> Services </h2>
      
      <div className="container services__container">
        <article className="service">
        <div className="service__head">
          <h3>UI/UX</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          
        </ul>


        </article>
 {/* /* ===============END of UI/UX==================== */} 

        <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          
        </ul>
        </article>  

         {/* // ===============END of WEB DEVELOPMENT====================  // */}

        <article className="service">
        <div className="service__head">
          <h3>Content Creation </h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
             <p> lorem ipsum dolor amer condsesir elit </p>
          </li>  
        </ul>
     </article>
 {/* ===============END of CONTENT CREATION==================== */}

      </div>
    </section>
  )
}

export default Services