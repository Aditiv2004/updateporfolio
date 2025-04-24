import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar';
import './component/Navbar.css';
import Footer from './component/Footer';
import './component/Footer.css'
import Home from './Pages/Home';
import './Pages/Home.css';
import About  from './Pages/About';
import './Pages/About.css';
import Skills from './Pages/Skills';
import './Pages/Skills.css';
import Project from './Pages/Project';
import './Pages/Project.css'
import Contact from './Pages/Contact';
import './Pages/Contact.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project/>} /> 
        <Route path="/contact" element={<Contact/>} /> 



      </Routes>
     
      <Footer />
   
    </BrowserRouter>
  )
}

export default App
