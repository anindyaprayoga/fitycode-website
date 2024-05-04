import React from 'react'
import "./Header.css"
import fitycode from "./assets/FITYCODE.png"

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <img src={fitycode} alt="fitycode" />
            <a href="/" className="logo">FityCode</a>
        </div>
        <nav className="navbar">
            <a href="/" className="active">Home</a>
            <a href="/courselist">Courses</a>
            <a href="/codeeditor">Online Compiler</a>
            <a href="/comingsoon">Virtual Pet</a>
            <a href="/login"><button className='navbar-button'>Login</button></a>
            <a href="/login"><button className='navbar-button'>Sign Up</button></a>
            
        </nav>
    </header>
  )
}

export default Header