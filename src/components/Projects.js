import React from "react";

import visionThumb from "../assets/vision-glasses-thumbnail.png";
import vexThumb from "../assets/vex-robotics-thumbnail.png";
import reactThumb from "../assets/react.png";
import gestureThumb from "../assets/gesture-canvas-thumbnail.png";
import vex2Thumb from "../assets/vex-robotics-thumbnail-2.png";

const projects = [
  {
    title: "GestureCanvas",
    tech: "Arduino · Python · Computer Vision",
    description:
      "Created an AI-powered hand gesture drawing and recognition system using Python that converts real-time hand movements into digital drawings. Developing a research board with experimental trials, data analysis, and graphs to evaluate accuracy and performance.",
    demoLinks: [
      {
        label: "Research Board (In Progress)",
        url: "https://coming-soon",
      },
    ],
    thumbnail: gestureThumb,
  },
  {
    title: "FTC Competition Robot",
    tech: "VEX Robotics · C++",
    description:
      "Worked with a team to design and build a competition robot capable of intaking, sorting, and scoring colored game elements using coordinated motors, servos, and sensors. Focused on precise timing, mechanical reliability, and consistent autonomous and driver-controlled performance in competitive matches.",
    demoLinks: [
      {
        label: "Photo",
        url: process.env.PUBLIC_URL + "/robot-photo.png",
      },
      {
        label: "Video",
        url: process.env.PUBLIC_URL + "/robot-video.mov",
      },
    ],
    thumbnail: vexThumb,
  },
  {
    title: "Vision Assistance System",
    tech: "Arduino · C++",
    description:
      "Developed assistive smart glasses using Arduino and C++ that detect nearby obstacles and provide real-time audio feedback. Designed and tested the system to improve spatial awareness and support hands-free navigation for visually impaired users.",
    github: "https://github.com/adheeshram/vision-assistance-glasses",
    thumbnail: visionThumb,
  },
  {
    title: "VEX Robotics Projects",
    tech: "VEX Robotics · C++",
    description:
      "Engineered and programmed VEX robotics systems in C++ utilizing motor controllers and sensor integration. Developed an owl robot with PID-controlled head rotation using feedback loops, and designed an automated cookie dispenser with synchronized motor control and sensor-triggered sequences to ensure repeatable accuracy and timing.",
    demoLinks: [
      {
        label: "Demo 1",
        url: process.env.PUBLIC_URL + "/owl.mp4",
      },
      {
        label: "Demo 2",
        url: process.env.PUBLIC_URL + "/cookie-machine.mp4",
      },
    ],
    thumbnail: vex2Thumb,
  },
  {
    title: "Personal Portfolio Website",
    tech: "React",
    description:
      "Developed a responsive personal portfolio website to showcase engineering projects, internship experience, and technical skills. Implemented component-based architecture, smooth scroll animations, and interactive UI elements using React.",
    thumbnail: reactThumb,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2>My Projects</h2>

      {projects.map((project, index) => (
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}

              {project.demoLinks &&
                project.demoLinks.map((link, i) => (
                  <React.Fragment key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                    {i < project.demoLinks.length - 1 && " | "}
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
