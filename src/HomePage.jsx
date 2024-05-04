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
    <>
        <div>
          <Header />
          <Banner />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Courses />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Footer />
        </div>
    </>
  )
}

export default HomePage