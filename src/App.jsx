import React from 'react'
import { Routes, Route } from "react-router-dom"
import About from './Pages/About'
import Instructor from './Pages/Instructor'
import Reviews from './Pages/Reviews'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import data from './data/data.json'

const App = () => {
  const { name } = data.instructor;
  const { title } = data.course;
  return (
    <div style={{ width: "800px", margin: "auto", borderRight: "5px solid black" }}>
      <Banner props={{ name, title }} />
      <div style={{ paddingLeft: "50px" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  )
}

export default App