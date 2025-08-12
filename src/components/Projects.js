import React from "react";

const projects = [
  {
    title: "Vision Assistance System",
    tech: "Arduino · C++",
    description:
      "Built assistive smart glasses using Arduino and C++ that detect obstacles and deliver audio alerts for hands-free navigation.",
    github: "https://github.com/adheeshram/vision-assistance-glasses",
    demo: "",
    thumbnail: "vision-glasses-thumbnail.png",
  },
  {
    title: "VEX Robotics Projects",
    tech: "VEX Robotics · C++",
    description:
      "Engineered and programmed VEX robotics systems in C++ utilizing motor controllers and sensor integration. Developed an owl robot with head rotation driven by PID-controlled motors and feedback loops. Designed an automated cookie dispenser featuring coordinated control and sensor-triggered sequences for chocolate chip dispensing and tray placement, ensuring repeatable accuracy and timing.",
    demoLinks: [
      "owl.mp4",
      "cookie-machine.mp4"
    ],
    github: null,
    thumbnail: "vex-robotics-thumbnail.png",
  },
  {
    title: "Personal Portfolio Website",
    tech: "React · JavaScript · HTML · CSS",
    description:
      "Developed this responsive personal portfolio website to showcase projects, internship experience, and contact information. Implemented smooth scroll animations, interactive UI components using React hooks, and integrated social links and an embedded resume for easy access.",
    github: "",
    demo: "",
    thumbnail: "react.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2>My Projects</h2>
      {projects.map((project, index) => {
        return (
          <div key={index} className="project-card">
            <div className="project-thumb-wrapper">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumb"
              />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="tech-used">{project.tech}</p>
              <p>{project.description}</p>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
                {project.demoLinks && project.demoLinks.map((link, i) => (
                  <React.Fragment key={i}>
                    <a href={link} target="_blank" rel="noopener noreferrer">Demo {i + 1}</a>
                    {i < project.demoLinks.length - 1 && " | "}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
