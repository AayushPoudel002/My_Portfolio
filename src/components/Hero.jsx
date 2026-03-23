import { useRef, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

export function Hero() {
  const scrollerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag to scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!scrollerRef.current) return;
    const scrollAmount = 120;
    if (e.key === 'ArrowLeft') {
      scrollerRef.current.scrollLeft -= scrollAmount;
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      scrollerRef.current.scrollLeft += scrollAmount;
      e.preventDefault();
    }
  };

  // Wheel to horizontal scroll
  const handleWheel = (e) => {
    if (!scrollerRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      scrollerRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.addEventListener('wheel', handleWheel, { passive: false });
      return () => scroller.removeEventListener('wheel', handleWheel);
    }
  }, []);
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getInitials = () => {
    return portfolioData.name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section className="hero">
      {/* Background Effects */}
      <div className="hero__gradient-overlay" />
      <div className="hero__orb hero__orb--left" />
      <div className="hero__orb hero__orb--right" />

      <div className="container hero__container">
        <div className="hero__content">
          {/* Profile Photo */}
          <div className="hero__photo-wrapper animate-fadeIn">
            <div className="hero__photo-glow" />
            <div className="hero__photo">
              {portfolioData.photo ? (
                <img src={portfolioData.photo} alt={portfolioData.name} />
              ) : (
                <div className="hero__photo-placeholder">
                  <span className="hero__photo-initials gradientText">{getInitials()}</span>
                </div>
              )}
            </div>
            <div className="hero__status-dot" title="Available for opportunities" />
          </div>

          {/* Greeting */}
          <div className="hero__badge animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <span className="hero__badge-dot">
              <span className="hero__badge-ping" />
              <span className="hero__badge-dot-inner" />
            </span>
            {portfolioData.availability}
          </div>

          {/* Main Headline */}
          <h1 className="hero__headline animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <span className="gradientText">{portfolioData.headline}</span>
          </h1>

          {/* Subheadline */}
          <p className="hero__subheadline animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            {portfolioData.subheadline}
          </p>

          {/* Tech Stack Pills */}
          <div className="hero__tech-wrapper animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="hero__tech-fade hero__tech-fade--left" />
            <div
              ref={scrollerRef}
              className={`hero__tech-scroller ${isDragging ? 'is-dragging' : ''}`}
              tabIndex={0}
              role="region"
              aria-label="Technology stack"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onKeyDown={handleKeyDown}
            >
              {portfolioData.techStack.map((tech) => (
                <span key={tech} className="hero__tech-pill mono">
                  {tech}
                </span>
              ))}
            </div>
            <div className="hero__tech-fade hero__tech-fade--right" />
          </div>

          {/* CTA Buttons */}
          <div className="hero__cta animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <button className="btn btnPrimary btnLg" onClick={scrollToProjects}>
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <polyline points="19 12 12 19 5 12"/>
              </svg>
            </button>
            <a href={portfolioData.resumeUrl} download className="btn btnOutline btnLg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="hero__socials animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href={`mailto:${portfolioData.socials.email}`}
              className="hero__social-link"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
