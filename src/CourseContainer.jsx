import React from 'react'
import './CourseContainer.css'
import background from "./assets/courselistbackground.png"
import Footer from './Footer'
import ccard from "./assets/ccard.png"
import javacard from "./assets/javacard.png"
import pythoncard from "./assets/pythoncard.png"
import htmlcsscard from "./assets/htmlcsscard.png"
import Header from './Header'

const CourseContainer = () => {
  return (
    <>
    <Header />
    <div className="course-container">
        {/* <img src={background} alt="" /> */}
        <h1>Course List</h1>
        <div className="course-card-container">
            <a href="/CourseLessonModul1">
            <div className="course-card1">
                <img src={ccard} alt="" />
            </div>
            </a>
            <a href="/comingsoon">
            <div className="course-card2">
                <img src={javacard} alt="" />
            </div>
            </a>
            <a href="/comingsoon">
            <div className="course-card3">
                <img src={pythoncard} alt="" />
            </div>
            </a>
            <a href="/comingsoon">
            <div className="course-card4">
                <img src={htmlcsscard} alt="" />
            </div>
            </a>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default CourseContainer