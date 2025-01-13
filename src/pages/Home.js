import React from 'react';
import Skills from '../commponets/Skills'; // Corrected 'commponets' to 'components'
import Projects from '../commponets/Projects'; // Corrected 'commponets' to 'components'
import nasiphiImage from '../image/nasiphi.png'; // Corrected 'image' to 'images'

const Home = () => {
  return (
    <div className="main-content">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hello, I'm Nasiphi Ndzumo, a passionate web developer who specializes
          in React, JavaScript, and more.
        </p>
      </div>

      {/* Profile Image */}
      <div className="profile-image-container">
        <img
          src={nasiphiImage}
          alt="Nasiphi Ndzumo"
          className="profile-image"
        />
      </div>

      {/* Additional Sections */}
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
