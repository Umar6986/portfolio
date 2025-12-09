import { useState } from "react";
import project1Image from "../assets/project1.jpg";
import project2Image from "../assets/project2.jpg";
import project3Image from "../assets/project3.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "PassOG - Password Manager",
      description:
        "Developed a responsive web application to securely manage and store user passwords.",
      image: project1Image,
      category: "web",
      technologies: ["React", "Tailwind", "Express", "MongoDB"],
      link: "https://passog-password-manager.netlify.app/",
      github: "https://github.com/Umar6986/PassOG---Password-Manager",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website to showcase projects and skills.",
      image: project2Image,
      category: "web",
      technologies: ["JavaScript", "React", "Vite", "Tailwind"],
      link: "https://portfolio-uf.netlify.app/",
      github: "https://github.com/Umar6986/Portfolio",
    },
    {
      id: 3,
      title: "Wealthwise - Budget Planner",
      description:
        "Track your spending, set goals, invest smarter with intelligent budgeting tools and real-time insights.",
      image: project3Image,
      category: "app",
      technologies: ["JavaScript", "React", "Vite", "Tailwind"],
      link: "https://wealthwise-budgetplanner.netlify.app/",
      github: "https://github.com/Umar6986/Wealthwise",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="project-filters">
          {["all", "web", "app"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn primary-btn">
                    View Project
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary-btn">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <p className="no-projects">No projects available in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
