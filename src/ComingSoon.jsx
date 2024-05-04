import React from 'react'
import "./comingsoon.css"
import comingsoonbackground from "./assets/comingsoonbackground1.jpg"
import fitycode from "./assets/FITYCODE.png"
import Wave from 'react-wavify'
import Header from './Header'
import Footer from './Footer'

const ComingSoon = () => {
  return (
    <>
      <Header />
    <div class="coming-soon">
      <img src={comingsoonbackground} alt="" width={1920} height={1080} className='background-comingsoon'/>
      <img src={fitycode} alt="" className='logo-comingsoon'/>
      <h1>Coming Soon....</h1>
    </div>
      <Footer />
    </>
  )
}

export default ComingSoon