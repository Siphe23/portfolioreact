import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      {/* Card for Recipe App */}
      <div className="project-card">
        <h3>Recipe App</h3>
        <p><strong>Description:</strong> A web app that allows users to view, add, update, and delete recipes.</p>
        <p><strong>Tech Stack:</strong> React, Node.js, Express, SQLite</p>
        <a href="https://github.com/yourusername/recipe-app" target="_blank" rel="noopener noreferrer">
          <button className="project-button">View on GitHub</button>
        </a>
      </div>

      {/* Example Card */}
      <div className="project-card">
        <h3>Project Name</h3>
        <p><strong>Description:</strong> Brief description of the project.</p>
        <p><strong>Tech Stack:</strong> Technology stack used in the project.</p>
        <a href="https://github.com/yourusername/project-name" target="_blank" rel="noopener noreferrer">
          <button className="project-button">View on GitHub</button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
