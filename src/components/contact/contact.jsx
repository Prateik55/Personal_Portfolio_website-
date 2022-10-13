import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from  "react-icons/md"
import{TbBrandTelegram} from "react-icons/tb"
import{BsWhatsapp} from "react-icons/bs"

const Contact = () => {
 
  return (
    <section id="contacts"> 
    <h5> Get In Touch</h5>
    <h2> Contact Me </h2>
    <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail className="contact__option-icon"/>
        <h4> Email</h4>
        <h5> Dummy@gmail.com</h5>
        <a href="mailto:dummy@gmail.com" target="_blank"> Send a Message </a>
      </article>

      <article className="contact__option">
        <TbBrandTelegram className="contact__option-icon"/>
        <h4> Telegram </h4>
        <h5> </h5>
        <a href="https://t.me//oculus" target="_blank"> Send a Message</a>
      </article>

      <article className="contact__option">
        <BsWhatsapp className="contact__option-icon"/>
        <h4> WhatsApp</h4>
        <h5>  </h5>
        <a href="https://api.whatsapp.com/send?phone=+91787387495" target="_blank"> Send a Message</a>
      </article>

      </div>
      {/* End of contacts options */}
      <form  action="https://formsubmit.co/lio.h9101@slmail.me" method="POST">
          <input type="text" name="name" placeholder="Your Full Name" required></input>
          <input type="email" name="email"placeholder="Your Email" required/>
          <input type= "text" name="company" placeholder ="Your Company/Organisation" />
          <textarea name="message" rows="7" placeholder="Your Message" required/>
          <input type="hidden" name="_captcha" value="false"></input>
          
          <button type="submit" className="btn btn-primary" target="_blank">Send Message </button>
      </form>
    </div>
    </section>
    
  )
}

export default Contact;