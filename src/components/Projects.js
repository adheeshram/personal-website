import React from "react";

const projects = [
  {
    title: "MedSight",
    tech: "Next.js · FastAPI · Firebase · ElevenLabs · OpenAI · Expo",
    description:
      "An AI-powered clinical observation platform using smart glasses to passively monitor real-world patient behavior, extract structured observations (activity, engagement, distraction), and generate longitudinal physician-facing reports.",
    badges: ["HackSMU Winner"],
    demoLinks: [
      {
        label: "devpost",
        url: "https://devpost.com/software/medsight-bu2x7l?ref_content=my-projects-tab&ref_feature=my_projects",
      },
    ],
    thumbnail: process.env.PUBLIC_URL + "/medsight-thumbnail.svg",
  },
  {
    title: "GestureCanvas",
    tech: "Arduino · Python · Computer Vision",
    description:
      "Created an AI-powered hand gesture drawing system converting real-time movements into digital art. Built a full science fair board with trials and data analysis for accuracy and performance.",
    badges: ["Science Fair Regionals Qualifier"],
    demoLinks: [
      { label: "Research Board (In Progress)", url: "https://coming-soon" },
    ],
    thumbnail: process.env.PUBLIC_URL + "/gesturecanvas-thumbnail.svg",
  },
  {
    title: "Sensor Fusion Navigation System",
    tech: "Arduino · C++ · Embedded Systems",
    description:
      "Developed a multi-sensor autonomous navigation system that detects obstacles and triggers autonomous responses. Optimized C++ code for low-latency performance on resource-limited microcontrollers.",
    github: "https://github.com/adheeshram/autonomous-sensor-fusion",
    thumbnail: process.env.PUBLIC_URL + "/autonomous-sensor-fusion-thumbnail.svg",
  },
  {
    title: "PLTW Digital Electronics Projects",
    tech: "Digital Logic · State Machines · Counters",
    description:
      "Built and tested digital logic circuits in PLTW Digital Electronics, including ripple counters and finite state machines. Designed, simulated, and validated behavior through both Tinkercad and breadboard implementations.",
    demoLinks: [
      {
        label: "Schematic Example",
        url: process.env.PUBLIC_URL + "/pltw-de-example1-tinkercad.png",
      },
      {
        label: "Breadboard Example",
        url: process.env.PUBLIC_URL + "/pltw-de-example1-breadboard.mp4",
      },
    ],
    thumbnail: process.env.PUBLIC_URL + "/pltw-de-thumbnail.svg",
  },
  {
    title: "FTC Competition Robot",
    tech: "VEX Robotics · C++",
    description:
      "Designed and built a robot capable of intaking, sorting, and scoring colored game elements using coordinated motors, servos, and sensors. Ensured precise timing, mechanical reliability, and consistent autonomous and driver-controlled performance.",
    badges: ["State Championship - 4th Place"],
    demoLinks: [
      { label: "Photo", url: process.env.PUBLIC_URL + "/robot-photo.png" },
      { label: "Video", url: process.env.PUBLIC_URL + "/robot-video.mp4" },
    ],
    thumbnail: process.env.PUBLIC_URL + "/ftc-robot-thumbnail.svg",
  },
  {
    title: "Vision Assistance System",
    tech: "Arduino · C++",
    description:
      "Built smart glasses that detect obstacles and provide audio feedback in real-time, improving spatial awareness for visually impaired users.",
    github: "https://github.com/adheeshram/vision-assistance-glasses",
    thumbnail: process.env.PUBLIC_URL + "/vision-assistance-thumbnail.svg",
  },
  {
    title: "VEX Robotics Projects",
    tech: "VEX Robotics · C++",
    description:
      "Engineered and programmed VEX robots including an owl robot with PID-controlled head rotation and an automated cookie dispenser with synchronized motor control for precise, repeatable performance.",
    demoLinks: [
      { label: "Demo 1", url: process.env.PUBLIC_URL + "/owl.mp4" },
      { label: "Demo 2", url: process.env.PUBLIC_URL + "/cookie-machine.mp4" },
    ],
    thumbnail: process.env.PUBLIC_URL + "/vex-projects-thumbnail.svg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-thumb-wrapper">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumb"
              />
            </div>
            <h3>{project.title}</h3>
            <p className="tech-used">{project.tech}</p>
            {project.badges?.length ? (
              <div className="project-badges" aria-label={`${project.title} highlights`}>
                {project.badges.map((badge) => (
                  <span key={badge} className="badge">
                    {badge}
                  </span>
                ))}
              </div>
            ) : null}
            <p className="project-desc">{project.description}</p>
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
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
