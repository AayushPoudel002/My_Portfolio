import { portfolioData } from '../data/portfolioData';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'github', href: portfolioData.socials.github, label: 'GitHub' },
    { name: 'linkedin', href: portfolioData.socials.linkedin, label: 'LinkedIn' },
    { name: 'email', href: `mailto:${portfolioData.socials.email}`, label: 'Email' },
  ];

  const renderIcon = (name) => {
    switch (name) {
      case 'github':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        );
      case 'email':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Logo */}
          <a href="#" className="footer__logo" onClick={scrollToTop}>
            <span className="footer__logo-bracket">&lt;</span>
            {portfolioData.name.split(' ')[0]}
            <span className="footer__logo-bracket">/&gt;</span>
          </a>

          {/* Social Links */}
          <div className="footer__socials">
            {socialLinks.map(({ name, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={label}
              >
                {renderIcon(name)}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="footer__copyright">
            <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
          </div>

          {/* Back to Top */}
          <button onClick={scrollToTop} className="footer__back-top">
            Back to top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="19" x2="12" y2="5"/>
              <polyline points="5 12 12 5 19 12"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
