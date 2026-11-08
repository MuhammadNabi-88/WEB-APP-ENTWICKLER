
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-category">
          {project.category}
        </span>
        <span className="project-number">
          0{project.id}
        </span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tags">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-actions">
        {project.demo && project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="button primary small"
          >
            Live Demo ↗
          </a>
        )}

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="button secondary small"
        >
          GitHub ↗
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
