import { portfolioData } from '../data/portfolioData';
import './About.css';

export function About() {
  const quickFacts = [
    { icon: 'location', label: 'Location', value: portfolioData.location },
    { icon: 'calendar', label: 'Status', value: portfolioData.availability },
    { icon: 'globe', label: 'Languages', value: portfolioData.languages.join(', ') },
    { icon: 'briefcase', label: 'Looking for', value: portfolioData.lookingFor[0] },
  ];

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'location':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        );
      case 'calendar':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        );
      case 'globe':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        );
      case 'briefcase':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__wrapper">
          {/* Section Header */}
          <div className="about__header textCenter">
            <span className="about__tag mono">// About Me</span>
            <h2 className="sectionTitle mb4">
              Building the web, <span className="gradientText">one project at a time</span>
            </h2>
            <p className="sectionSubtitle about__subtitle">
              Get to know a bit more about my background and what drives me.
            </p>
          </div>

          <div className="about__grid">
            {/* Bio Section */}
            <div className="about__bio glassCard">
              <h3 className="about__bio-title">
                <span className="about__bio-line" />
                <span>My Story</span>
                <span className="about__bio-line" />
              </h3>
              <div className="about__bio-content">
                {portfolioData.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* What I'm Looking For */}
              <div className="about__looking-for">
                <h4 className="about__looking-title">What I'm Looking For</h4>
                <div className="about__looking-tags">
                  {portfolioData.lookingFor.map((item) => (
                    <span key={item} className="about__looking-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="about__sidebar">
              <div className="about__facts glassCard">
                <h3 className="about__facts-title">Quick Facts</h3>
                <div className="about__facts-list">
                  {quickFacts.map(({ icon, label, value }) => (
                    <div key={label} className="about__fact">
                      <div className="about__fact-icon">
                        {renderIcon(icon)}
                      </div>
                      <div className="about__fact-content">
                        <p className="about__fact-label">{label}</p>
                        <p className="about__fact-value">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fun Stats */}
              <div className="about__stats glassCard">
                <div className="about__stats-grid">
                  <div className="about__stat">
                    <p className="about__stat-number gradientText">10+</p>
                    <p className="about__stat-label">Projects</p>
                  </div>
                  <div className="about__stat">
                    <p className="about__stat-number gradientText">7</p>
                    <p className="about__stat-label">Skill Areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
