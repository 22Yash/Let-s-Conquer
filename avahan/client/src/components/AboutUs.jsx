import React from 'react';
import './AboutUs.css'; // CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <div className="mission-vision">
        <div className="card">
          <h3>Mission Statement</h3>
          <p>
            Our mission is to inspire and empower individuals of all ages through sports and fitness activities. We aim to foster a love for sports, teamwork, and healthy living while providing opportunities for growth and development.
          </p>
        </div>
        <div className="card">
          <h3>Vision</h3>
          <p>
            Our vision is to become a leading organization in sports development, recognized for our commitment to excellence, inclusivity, and community engagement. We envision a world where every individual has access to sports and physical activities.
          </p>
        </div>
      </div>

      <h3>Our History</h3>
      <p>
        Founded in 2010 by a group of sports enthusiasts, Sports Community has grown from a small local club into a vibrant community hub for sports and fitness. Over the years, we have organized numerous events, training sessions, and workshops, impacting the lives of countless individuals.
      </p>
     
      <h3>Contact Us</h3>
      <p>
        For inquiries or more information about our programs, please contact us at:
      </p>
      <p>
        Email: <a href="mailto:info@sportscommunity.com">info@sportscommunity.com</a><br />
        Phone: 123-456-7890<br />
        Address: 123 Sports Lane, City, State, ZIP
      </p>
    </div>
  );
};

export default AboutUs;
