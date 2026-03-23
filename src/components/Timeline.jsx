import { portfolioData } from '../data/portfolioData';
import './Timeline.css';

export function Timeline() {
  return (
    <section id="education" className="timeline section">
      {/* Background */}
      <div className="timeline__bg" />
      
      <div className="container timeline__container">
        <div className="timeline__wrapper">
          {/* Section Header */}
          <div className="timeline__header textCenter">
            <span className="timeline__tag mono">// Education & Experience</span>
            <h2 className="sectionTitle mb4">
              My <span className="gradientText">Journey</span>
            </h2>
            <p className="sectionSubtitle timeline__subtitle">
              The milestones and experiences that have shaped my development career.
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline__line-wrapper">
            {/* Timeline Line */}
            <div className="timeline__line" />

            {portfolioData.timeline.map((item, index) => (
              <div
                key={item.id}
                className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
              >
                {/* Timeline Dot */}
                <div className="timeline__dot">
                  <div className="timeline__dot-inner" />
                  <div className="timeline__dot-ping" />
                </div>

                {/* Content Card */}
                <div className="timeline__card glassCard glassCardHover">
                  {/* Year Badge */}
                  <div className="timeline__year badge badgePrimary">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {item.year}
                  </div>

                  {/* Title */}
                  <div className="timeline__title-row">
                    <div className="timeline__icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="timeline__title">{item.title}</h3>
                      <p className="timeline__org">{item.organization}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="timeline__description">{item.description}</p>

                  {/* Highlights */}
                  <ul className="timeline__highlights">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="timeline__highlight">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer for alternating layout */}
                <div className="timeline__spacer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
