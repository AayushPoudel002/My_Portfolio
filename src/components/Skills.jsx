import { Layout, Code, Atom, BarChart3, Server, Database, Shield, Rocket, Square } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

// Map icon names from portfolioData to Lucide components
const iconMap = {
  layout: Layout,
  code: Code,
  atom: Atom,
  chart: BarChart3,
  server: Server,
  database: Database,
  shield: Shield,
  rocket: Rocket,
};

export function Skills() {
  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Square; 
    return <IconComponent size={24} />;
  };

  return (
    <section id="skills" className="skills section">
      {/* Background */}
      <div className="skills__bg" />
      
      <div className="container skills__container">
        <div className="skills__wrapper">
          {/* Section Header */}
          <div className="skills__header textCenter">
            <span className="skills__tag mono">// Skills & Technologies</span>
            <h2 className="sectionTitle mb4">
              My <span className="gradientText">Technical Toolkit</span>
            </h2>
            <p className="sectionSubtitle skills__subtitle">
              A comprehensive overview of the technologies and concepts I work with,
              organized by category.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills__grid">
            {portfolioData.skills.map((skill) => (
              <div key={skill.category} className="skills__card glassCard glassCardHover">
                {/* Category Header */}
                <div className="skills__card-header">
                  <div className="skills__card-icon">
                    {renderIcon(skill.icon)}
                  </div>
                  <h3 className="skills__card-title">{skill.category}</h3>
                </div>

                {/* Skills List */}
                <div className="skills__tags">
                  {skill.items.map((item) => (
                    <span key={item} className="skillBadge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <p className="skills__note textCenter">
            Always learning and expanding my skill set with new technologies and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}

