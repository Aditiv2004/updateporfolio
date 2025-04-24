import React from 'react'


export default function Contact() {
  return (
   
    <div className='big'>

    <div class="contact-form">
        <h2>Contact Us</h2>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
        <div id="response"></div>
    </div>

{/* 
    <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script src="script.js"></script> */}

    </div>
  )
}
