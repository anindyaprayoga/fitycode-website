import React from 'react'
import './App.css'
import "./Header"
import Header from './Header'
import Banner from './Banner'
import Features from './Features'
import Courses from './Courses'
import About from './About'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '350vh' }}>
      <div className="main-content" style={{ flexGrow: 1 }}>
        <Header />
        <Banner />
        <Features />
        <Courses />
        <About />
      </div>
      <Footer />
    </div>
  )
}


export default HomePage