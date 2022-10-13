import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const Testimonials = () => {
  return (
    <section  id="testimonials"> 
    <h5> Reviews from Clients </h5>
    <h2> Testimonials </h2>
    
    <Swiper className="container testimonials__container"
     modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >


      <SwiperSlide className="testimonial">
        <div className="client__avatar">
        <img src={AVTR1} alt="avatar1"/>
        </div>
        <h5 className="client__name"> Ernest Class</h5>
        <small className="client__review">
            "lorem ipsum dolor sit amet consectetur adipiscing elit vivamus in vel maecenas arcu sapien gravida tempus ligula dis sem elementum parturient congue nulla blandit dignissim luctus molestie scelerisque finibus magnis"
        </small>
      </SwiperSlide>

      <SwiperSlide className="testimonial">
        <div className="client__avatar">
        <img src={AVTR2} alt="avatar2"/>
        </div>
        <h5 className="client__name"> Ernest Class</h5>
        <small className="client__review">
            "lorem ipsum dolor sit amet consectetur adipiscing elit vivamus in vel maecenas arcu sapien gravida tempus ligula dis sem elementum parturient congue nulla blandit dignissim luctus molestie scelerisque finibus magnis"
        </small>  
      </SwiperSlide>

      <SwiperSlide className="testimonial">
        <div className="client__avatar">
        <img src={AVTR3} alt="avatar3"/>
        </div>
        <h5 className="client__name"> Ernest Class</h5>
        <small className="client__review">
            "lorem ipsum dolor sit amet consectetur adipiscing elit vivamus in vel maecenas arcu sapien gravida tempus ligula dis sem elementum parturient congue nulla blandit dignissim luctus molestie scelerisque finibus magnis"
        </small>
      </SwiperSlide>

      <SwiperSlide className="testimonial">
        <div className="client__avatar">
        <img src={AVTR4} alt="avatar4"/>
        </div>
        <h5 className="client__name"> Ernest Class</h5>
        <small className="client__review">
            "lorem ipsum dolor sit amet consectetur adipiscing elit vivamus in vel maecenas arcu sapien gravida tempus ligula dis sem elementum parturient congue nulla blandit dignissim luctus molestie scelerisque finibus magnis
        </small>
      </SwiperSlide>

      

    </Swiper>
    </section>
  )
  

}

export default Testimonials