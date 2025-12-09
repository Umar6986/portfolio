import { useEffect, useRef } from 'react';
import profileImage from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content" ref={aboutRef}>
          <div className="about-image">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="about-text">
            <h3>Hello! I'm <span className="highlight">Umar Farooq</span></h3>
            <p>
              I'm a passionate web developer and designer with a strong focus on creating
              beautiful, functional, and user-friendly websites and applications. With
              expertise in both front-end and back-end technologies, I strive to build
              digital experiences that are not only visually appealing but also
              performant and accessible.
            </p>
            <p>
              My journey in web development started several years ago, and since then,
              I've worked on various projects ranging from small business websites to
              complex web applications. I'm constantly learning and exploring new
              technologies to stay up-to-date with the ever-evolving web landscape.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <h4>Name:</h4>
                <p>Umar Farooq</p>
              </div>
              <div className="detail-item">
                <h4>Email:</h4>
                <p>your.email@example.com</p>
              </div>
              <div className="detail-item">
                <h4>Location:</h4>
                <p>Your City, Country</p>
              </div>
              <div className="detail-item">
                <h4>Availability:</h4>
                <p>Available for freelance or full-time</p>
              </div>
            </div>
            <div className="about-buttons">
              <a href={resumePDF} download className="btn primary-btn">
                Download Resume
              </a>
              <a href="#contact" className="btn secondary-btn">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
