function ProjectCard({ project }) {
  return (
    <article className="project-card glass-card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-type">{project.type}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="project-summary">{project.summary}</p>
      <h4 className="project-details-heading">{project.detailsLabel}</h4>
      <ul className="project-details">
        {project.details.map((detail) => <li key={detail}>{detail}</li>)}
      </ul>
      <ul className="tag-list" aria-label="Technologies">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard
