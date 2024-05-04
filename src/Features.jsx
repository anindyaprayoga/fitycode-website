import React from 'react'
import "./Features.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    AOS.init();
  return (
    <>
    <div className="features">
        <h1>Features</h1>
        <div className='features-card1' data-aos="flip-left" data-aos-duration="1000">
            <div className="circle1">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="none" stroke="white" 
            d="M13 16.5a11.003 11.003 0 0 0 4.041 3.93l1.459.82v.25h-13v-.25l1.459-.82A11.003 11.003 0 0 0 11 16.5m-9.5-3h21m0-11h-21v14h21z"></path>
            </svg>
            </div>
            <div className="square1">
                <h2>Online Compiler</h2>
                <p>No need to worry about installation, you can start implement what you learned right away</p>
                <button className='lets-try'>Let's try</button>
            </div>
        </div>
        <div className='featuraes-card2'data-aos="flip-right" data-aos-duration="1000">
            <div className="circle2">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 256 256">
                <path fill="white" d="m162.22 108.67l-48-32A4 4 0 0 0 108 80v64a4 4 0 0 0 2.11 3.53a4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66M116 136.53V87.47L152.79 112ZM216 44H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm8 40a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4"></path>
            </svg>
            </div>
            <div className="square2">
                <h2>Video Based or Text Based</h2>
                <p>You have freedom to choode how you will learn. It all depends on how do you like it</p>
                <button className='lets-try'>Let's try</button>
            </div>
        </div>
        <div className='features-card3' data-aos="flip-left" data-aos-duration="1000">
            <div className="circle3">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="white" d="M15.493 3.507a1.65 1.65 0 0 0-1.5 1.643V10a.75.75 0 0 1-.75.75c-1.443 0-2.457.588-3.206 1.488c-.773.928-1.276 2.206-1.591 3.557c-.313 1.343-.427 2.696-.461 3.722a22 22 0 0 0-.012.983h7.02v-.75a2.25 2.25 0 0 0-2.249-2.25h-1.25a.75.75 0 0 1 0-1.5h1.25a3.75 3.75 0 0 1 3.748 3.75v.75h.75a.75.75 0 0 0 .75-.75v-10A.75.75 0 0 1 18.74 9h.506a1.25 1.25 0 0 0 1.062-1.909l-.62-1a1.25 1.25 0 0 0-1.061-.591h-2.386a.75.75 0 0 1-.75-.75zM6.473 20.5c-.002-.284 0-.634.013-1.033c.036-1.083.157-2.542.5-4.012c.34-1.462.915-2.996 1.899-4.177c.872-1.047 2.055-1.801 3.61-1.985V5.15A3.15 3.15 0 0 1 15.641 2c.746 0 1.35.604 1.35 1.35V4h1.636c.95 0 1.834.492 2.335 1.3l.62 1c1.092 1.763-.084 4.02-2.093 4.19v9.26A2.25 2.25 0 0 1 17.242 22H5.795a3.797 3.797 0 0 1-2.775-6.39l1.135-1.217a3.06 3.06 0 0 0-.073-4.248L2.969 9.03a.75.75 0 0 1 1.06-1.06l1.114 1.114a4.56 4.56 0 0 1 .11 6.333l-1.136 1.216a2.3 2.3 0 0 0 1.68 3.867z"></path></svg>
            </div>
            <div className="square3">
                <h2>Virtual Pet</h2>
                <p>Virtual pet that will accompany your journey. They will cheer you up all the time</p>
                <button className='lets-try'>Let's try</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Features