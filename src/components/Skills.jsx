
const skills = [
  ["Frontend", "React, JavaScript, TypeScript, HTML5, CSS3"],
  ["Styling", "Tailwind CSS, Responsive Design"],
  ["Backend", "Java, Spring Boot, Python, PHP"],
  ["Database", "MySQL"],
  ["APIs", "REST APIs, API Integration"],
  ["Tools", "Git, GitHub, Docker"]
];

function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-heading">
        <span>TECHNICAL EXPERTISE</span>
        <h2>Technologies I work with.</h2>
      </div>

      <div className="skills-grid">
        {skills.map(([name, description]) => (
          <div className="skill-card" key={name}>
            <span>{name}</span>
            <h3>{description}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
