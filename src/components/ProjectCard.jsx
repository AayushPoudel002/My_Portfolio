import './ProjectCard.css';

export function ProjectCard({ project }) {
  return (
    <article className="projectCard glassCard glassCardHover">
      {/* Project Image */}
      <div className="projectCard__image">
        {/* Real Image */}
        <img
          src={project.image}
          alt={project.title}
          className="projectCard__img"
        />

        {/* Fallback placeholder (only if image missing) */}
        {!project.image && (
          <div className="projectCard__image-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
        )}

        {/* Overlay on Hover */}
        <div className="projectCard__overlay">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnOutline btnSm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            Code
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary btnSm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Demo
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="projectCard__content">
        {/* Category Badge */}
        <span className="projectCard__category badge badgePrimary">
          {project.category}
        </span>

        <h3 className="projectCard__title">{project.title}</h3>

        <p className="projectCard__description">{project.description}</p>

        {/* Tech Stack */}
        <div className="projectCard__tech">
          {project.tech.map((tech) => (
            <span key={tech} className="projectCard__tech-item mono">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
