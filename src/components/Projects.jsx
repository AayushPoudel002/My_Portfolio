import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

export function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Fetch API implementation (syllabus requirement)
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulating network delay for demonstration
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const response = await fetch('/projects.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data.projects);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message || 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  // Retry handler
  const handleRetry = () => {
    setError(null);
    setLoading(true);
    // Trigger re-fetch by updating state
    fetch('/projects.json')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects__wrapper">
          {/* Section Header */}
          <div className="projects__header textCenter">
            <span className="projects__tag mono">// Featured Work</span>
            <h2 className="sectionTitle mb4">
              Things I've <span className="gradientText">Built</span>
            </h2>
            <p className="sectionSubtitle projects__subtitle">
              A selection of projects that showcase my skills and experience in
              web development.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="projects__filters">
            {portfolioData.projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filterBtn ${activeFilter === category ? 'filterBtnActive' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="projects__loading">
              <div className="projects__spinner" />
              <p>Loading projects...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="projects__error">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <h3>Failed to load projects</h3>
              <p>{error}</p>
              <button className="btn btnPrimary" onClick={handleRetry}>
                Try Again
              </button>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && !error && (
            <>
              {filteredProjects.length === 0 ? (
                <div className="projects__empty">
                  <p>No projects found in this category.</p>
                </div>
              ) : (
                <div className="projects__grid">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </>
          )}

          {/* View All Link */}
          {!loading && !error && (
            <div className="projects__footer textCenter">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link linkUnderline"
              >
                View more on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
