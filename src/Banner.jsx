import React, { useState } from 'react'
import "./Banner.css"
import home from "./assets/home.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  AOS.init();
  return (
    <div className="banner" data-aos="fade-right" data-aos-duration="1000">
        <img src={home} alt="" />
        <button>Get Started</button>
    </div>
  )
}

export default Banner