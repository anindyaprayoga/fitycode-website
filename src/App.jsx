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
import CourseLessonModul1 from './courses/C Programming/CourseLessonModul1.jsx'
import CourseLessonModul2 from './courses/C Programming/CourseLessonModul2.jsx'
import CourseLessonModul3 from './courses/C Programming/CourseLessonModul3.jsx'
import CourseLessonModul4 from './courses/C Programming/CourseLessonModul4.jsx'
import CourseLessonModul5 from './courses/C Programming/CourseLessonModul5.jsx'
import CourseLessonModul6 from './courses/C Programming/CourseLessonModul6.jsx'
import CourseLessonModul7 from './courses/C Programming/CourseLessonModul7.jsx'
import CourseLessonModul8 from './courses/C Programming/CourseLessonModul8.jsx'
import CodeEditor from "./components/CodeEditor.jsx";
import Login from "./Login.jsx"
import Quiz from './courses/Quiz.jsx'

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
        <Route path="/courselessonmodul1" element={<CourseLessonModul1 />} />
        <Route path="/courselessonmodul2" element={<CourseLessonModul2 />} />
        <Route path="/courselessonmodul3" element={<CourseLessonModul3 />} />
        <Route path="/courselessonmodul4" element={<CourseLessonModul4 />} />
        <Route path="/courselessonmodul5" element={<CourseLessonModul5 />} />
        <Route path="/courselessonmodul6" element={<CourseLessonModul6 />} />
        <Route path="/courselessonmodul7" element={<CourseLessonModul7 />} />
        <Route path="/courselessonmodul8" element={<CourseLessonModul8 />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/codeeditor" element={<CodeEditor />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
