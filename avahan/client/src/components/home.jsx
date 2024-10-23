import React from 'react';
import './home.css'

function Home(){
    return (
        <div className="home-container">
        <header>
          <h1>Welcome to AVAHAN Sports Event</h1>
          <p>Experience the thrill of competition and camaraderie in the ultimate sports event of the year. AVAHAN brings together athletes, teams, and supporters from across the region.</p>
        </header>
  
        <section className="cards-section">
          <div className="card">
            <h3>About AVAHAN</h3>
            <p>AVAHAN is a multi-sport event designed to showcase athleticism, teamwork, and the spirit of sportsmanship. With a wide variety of sports and competitions, it's a must-attend event for sports lovers.</p>
          </div>
  
          <div className="card">
            <h3>Event Schedule</h3>
            <p><strong>Date:</strong> November 20 - November 25, 2024</p>
            <p><strong>Venue:</strong> XYZ Sports Complex</p>
            <p><strong>Sports:</strong> Basketball, Soccer, Tennis, Swimming, and more</p>
          </div>
  
          <div className="card">
            <h3>Register for AVAHAN</h3>
            <p>Ready to compete? Register now and secure your place in AVAHAN. Whether you’re an individual athlete or a team, we have categories to fit all levels of competition.</p>
            <button className="cta-button">Register Now</button>
          </div>
  
          <div className="card">
            <h3>Contact Us</h3>
            <p>Have questions or need more info about AVAHAN? Reach out to us, and we'll be happy to help you with any queries about participation, volunteering, or attending.</p>
            <button className="cta-button">Contact Us</button>
          </div>
        </section>
      </div>
    )
}

export default Home;

