
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All", "JavaScript", "PHP", "Python", "Java"
  ];

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <section className="section container" id="projects">
      <div className="section-heading">
        <span>SELECTED WORK</span>
        <h2>Projects that demonstrate my skills.</h2>
        <p>Practical applications and development work.</p>
      </div>

      <div className="filters">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={category === item ? "filter active" : "filter"}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
