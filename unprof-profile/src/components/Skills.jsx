function Skills({ skills }) {
  return (
    <div className="skills">

      <h2>Skills</h2>

      <div className="skill-list">

        {skills.map((skill, index) => (
          <span key={index}>
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}

export default Skills;