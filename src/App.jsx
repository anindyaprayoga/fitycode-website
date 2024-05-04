import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./Header"
import Header from './Header'
import Banner from './Banner'
import Features from './Features'
import Courses from './Courses'
import About from './About'
import Footer from './Footer'
import HomePage from './HomePage'
import CourseList from './CourseList'
import CourseLesson from './CourseLesson'
import CodeEditor from "./components/CodeEditor.jsx";
import Login from "./Login.jsx"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ComingSoon from './ComingSoon.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/courselesson" element={<CourseLesson />} />
        <Route path="/codeeditor" element={<CodeEditor />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
