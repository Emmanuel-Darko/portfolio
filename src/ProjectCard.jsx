const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
    <path d="M3.5 12.5 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-card--${project.theme} ${index < 3 ? 'project-card--featured' : ''}`}>
      <div className="project-art" aria-hidden="true">
        <div className="art-window">
          <div className="art-window__bar"><i /><i /><i /><span>{project.artLabel}</span></div>
          <div className="art-window__body">
            <div className="art-lines"><b /><b /><b /></div>
            <div className="art-tiles"><i /><i /><i /></div>
            <div className="art-pill" />
          </div>
        </div>
        <span className="art-index">0{index + 1}</span>
      </div>
      <div className="project-card__content">
        <div className="project-card__eyebrow">{project.category}</div>
        <div className="project-card__title-row">
          <h3>{project.name}</h3>
          {project.links?.length > 0 && (
            <div className="project-link-group">
              {project.links.map((link) => (
                <a className="project-link" key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={`${link.label} for ${project.name}`}>
                  <ArrowIcon />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {project.name === 'Wedding Website' && <span className="project-note">Personal project · shown without event details</span>}
      </div>
    </article>
  )
}
