import { portfolioData } from '../data/portfolioData';
import './Achievements.css';

export function Achievements() {
const renderIcon = (iconName) => {
  switch (iconName) {
    case 'award':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      );

    case 'graduation':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      );

    case 'trophy':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
          <path d="M4 22h16"/>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
        </svg>
      );

    case 'globe':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20"/>
          <path d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20"/>
        </svg>
      );

    case 'cpu':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>
        </svg>
      );

    case 'brain':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3"/>
          <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3"/>
          <path d="M9 21h6"/>
        </svg>
      );

    default:
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      );
  }
};

  return (
    <section className="achievements section">
      <div className="container">
        <div className="achievements__wrapper">
          {/* Section Header */}
          <div className="achievements__header textCenter">
            <span className="achievements__tag mono">// Achievements</span>
            <h2 className="sectionTitle mb4">
              Certifications & <span className="gradientText">Milestones</span>
            </h2>
            <p className="sectionSubtitle achievements__subtitle">
              Recognition and accomplishments along my journey.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="achievements__grid">
            {portfolioData.achievements.map((achievement) => (
              <div key={achievement.id} className="achievements__card glassCard glassCardHover">
                <div className="achievements__icon">
                  {renderIcon(achievement.icon)}
                </div>
                <h3 className="achievements__title">{achievement.title}</h3>
                <p className="achievements__issuer">{achievement.issuer}</p>
                <span className="achievements__date badge">{achievement.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
