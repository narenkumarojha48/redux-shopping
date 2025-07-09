import React from 'react'
import { Route,Routes } from 'react-router-dom'
const About = () => {
  return (
    <div>About
      <Routes>
        <Route path="/test" element={<About />} />
      </Routes>
    </div>
  )
}

export default About