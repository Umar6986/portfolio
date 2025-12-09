import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJs, faReact, 
  faNodeJs, faSass, faGitAlt, faFigma 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faMobile, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillsRef = useRef(null);

  // Skill categories with their respective skills
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', icon: faHtml5, proficiency: 90 },
        { name: 'CSS3', icon: faCss3Alt, proficiency: 85 },
        { name: 'JavaScript', icon: faJs, proficiency: 80 },
        { name: 'React', icon: faReact, proficiency: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: faNodeJs, proficiency: 75 },
        { name: 'Express', icon: faServer, proficiency: 70 },
        { name: 'MongoDB', icon: faDatabase, proficiency: 65 },
        { name: 'RESTful APIs', icon: faGlobe, proficiency: 80 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', icon: faGitAlt, proficiency: 85 },
        { name: 'Responsive Design', icon: faMobile, proficiency: 90 },
      ],
    },
  ];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill bars when they come into view
            const skillBars = entry.target.querySelectorAll('.skill-progress-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.style.width = bar.getAttribute('data-progress') + '%';
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-content" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div className="skill-category" key={categoryIndex}>
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <div className="skill-icon">
                        <FontAwesomeIcon icon={skill.icon} />
                      </div>
                      <h4>{skill.name}</h4>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar" 
                        data-progress={skill.proficiency}
                        style={{ width: '0%' }} // Initial width, will be animated
                      ></div>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
