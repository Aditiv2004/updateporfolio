import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
 
 


  <nav>
    <div className="logo">
      <i className="fas fa-laptop-code"></i> Aditi
    </div>
    <div className="menu-toggle" onclick="toggleMenu()">☰</div>
    <div className="nav-container" id="navContainer">
      <div className="nav-links">
      <Link  to="/home">Home</Link>
      <Link  to="/about">About</Link>
      <Link  to="/skills">Skills</Link>        
      <Link  to="/project">Project</Link>     
      <Link  to="/contact">Contact</Link>   
         </div>
      <a className="resume-btn" href="resume.pdf" download>
        <i className="fas fa-cloud-arrow-down"></i> Download Resume
      </a>
    </div>
  </nav>

  {/* <script>
    function toggleMenu() {
      const nav = document.getElementById('navContainer');
      nav.classNameList.toggle('active');
    }
  </script> */}




   </>
  )
}
