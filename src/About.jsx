import React from 'react'
import fitycode from "./assets/FITYCODE.png"
import "./About.css"
import avatar1 from "./assets/avataaars.png"

const About = () => {
  return (
    <div className='about'>
        <div className='self'>
            <img src={fitycode} alt="" width={240} height={240}/>
            <div className='about-text'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Harum dolorum culpa eos temporibus magnam odit omnis? 
                    Consectetur ea incidunt ipsum, placeat tempora perspiciatis ipsam, 
                    error iste earum praesentium fuga harum architecto commodi! 
                    Rem tempore non quo!
                </p>
            </div>
        </div>
        <div className='testimonial'>
            <div className="testimoni" data-aos="zoom-in-right">
                <p><i>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Hic quis repudiandae delectus facere expedita minima. 
                        Sunt, ea debitis. Aliquid esse eaque facere maiores eligendi."
                    </i>
                </p>
                <div className='identity'>
                    <img src={avatar1} alt="" width={84} height={84}/>
                    <div className='identitytext'>
                        <h3>name</h3>
                        <p>profession</p>
                    </div>
                </div>
            </div>
            <div className='whattheysay'>
                <h1>What They Say About Us?</h1>
            </div>
        </div>
    </div>
  )
}

export default About