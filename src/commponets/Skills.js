import React from 'react';

const Skills = () => {
  const skillsData = [
    { skill: 'HTML', proficiency: 'Intermediate', notes: 'Used in multiple web projects.' },
    { skill: 'CSS', proficiency: 'Advanced', notes: 'Styled responsive layouts, including grid and flexbox.' },
    { skill: 'JavaScript', proficiency: 'Intermediate', notes: 'Built dynamic web applications.' },
  ];

  return (
    <section id="skills">
      <h2>Skills Matrix</h2>
      <div className="card-container">
        {skillsData.map((skill, index) => (
          <div className="card" key={index}>
            <h3>{skill.skill}</h3>
            <p><strong>Proficiency:</strong> {skill.proficiency}</p>
            <p><strong>Notes:</strong> {skill.notes}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
