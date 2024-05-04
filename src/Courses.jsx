import React from 'react'
import "./Courses.css"
import python from "./assets/python.png"
import c from "./assets/c.png"
import java from "./assets/java.png"
import htmlcss from "./assets/htmlcss.png"

const Courses = () => {
  return (
    <div className='courses'>
    <h1>Courses</h1>
    <div className='container'>
        <div className="course1" data-aos="fade-right" data-aos-delay="500">
            <img src={c} alt="" width={240} height={240}/>
            <h2>C Programming</h2>
        </div>
        <div className="course2" data-aos="fade-right" data-aos-delay="1000">
            <img src={python} alt="" width={240} height={240}/>
            <h2>Python Programming</h2>
        </div>
        <div className="course3" data-aos="fade-right" data-aos-delay="1500">
            <img src={java} alt="" width={240} height={240}/>
            <h2>Java Programming</h2>
        </div>
        <div className="course4" data-aos="fade-right" data-aos-delay="2000">
            <img src={htmlcss} alt="" width={240} height={240}/>
            <h2>HTML & CSS</h2>
        </div>
    </div>
    <h2>Many Courses will come soon....</h2>
    </div>
  )
}

export default Courses