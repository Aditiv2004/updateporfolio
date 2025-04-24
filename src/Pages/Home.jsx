import React from 'react'
import profile from './profile.jpg'
export default function Home() {
  return (
 <>
    <section className="home" id="home">
    <div className="home-container">
    
      <div className="profile-pic">
        <img src={profile} alt="Aditi's photo" />
      </div>

    
      <div className="home-content">
        <h2 className="hello">Hey I'm <span>Aditi</span></h2>
        <h3>Web Developer</h3>
        <p>
          Hi, I am Aditi Vishwakarma. I am a web developer. I have a passion for web development and love to create websites. I am a quick learner and always ready to learn new things.
        </p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div><br />
        <a href="resume.pdf" className="download-btn" download>Download CV</a>
      </div>
      </div>
    </section>

  </>
  
  )
}
