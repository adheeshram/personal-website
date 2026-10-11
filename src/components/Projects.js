import React from "react";

const projects = [
  {
    title: "FTC Robotics",
    role: "Mechanical & Systems Engineer",
    period: "Plano West · Aug 2025–May 2026",
    tech: "Fusion 360 · 3D printing · PID control · subsystem integration",
    description:
      "CAD-designed and 3D-printed intake and sorting mechanisms, tuned PID controllers, integrated robot subsystems, and repaired match-day failures.",
    detail:
      "The team placed 4th at the Texas UIL 6A State Championship and received the Inspire Award at a North Texas qualifier.",
    badges: ["Team: 4th at UIL 6A State", "Team: Inspire Award"],
    demoLinks: [
      { label: "Robot photo", url: process.env.PUBLIC_URL + "/robot-photo.png" },
      { label: "Match video", url: process.env.PUBLIC_URL + "/robot-video.mp4" },
    ],
    thumbnail: process.env.PUBLIC_URL + "/robot-photo.png",
    imagePosition: "center 58%",
  },
  {
    title: "MedSight",
    role: "Co-Creator / Full-Stack Developer",
    period: "HackSMU VII · Spring 2026",
    tech: "FastAPI · Next.js · Firebase · Expo · OpenAI API · ElevenLabs API",
    description:
      "Built a prototype that converts smart-glasses imagery into structured behavioral observations, personal baselines, deviation alerts, and longitudinal reports.",
    detail:
      "Developed the capture, storage, analysis, and clinician-facing dashboard workflows. The project was a hackathon prototype—not a clinically validated or deployed medical system.",
    badges: ["ElevenLabs track winner", "200+ participant hackathon"],
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
    role: "Independent Engineering Research",
    period: "LASER · 2025–2026",
    tech: "Arduino Uno · MPU6050 · Python · sensor fusion · ML correction",
    description:
      "Developed a wearable gesture-drawing system that translates hand movement into on-screen drawings.",
    detail:
      "Used IMU sensor fusion and machine-learning correction to address drift and improve gesture interpretation.",
    badges: ["Dallas Regional Science Fair qualifier"],
    thumbnail: process.env.PUBLIC_URL + "/gesturecanvas-thumbnail.svg",
  },
  {
    title: "Autonomous Sensor Fusion Navigation",
    role: "Embedded Systems Project",
    tech: "Arduino · C++ · distance sensing · confidence logic",
    description:
      "Built a navigation prototype that combines distance-sensor measurements for obstacle detection and response.",
    detail:
      "Implemented sensor-fusion and confidence logic so control decisions remain useful under noisy or conflicting measurements.",
    thumbnail: process.env.PUBLIC_URL + "/autonomous-sensor-fusion-thumbnail.svg",
  },
  {
    title: "Vision Assistance Smart Glasses",
    role: "Wearable Embedded Prototype",
    tech: "Arduino · ultrasonic sensing · DFPlayer Mini · C++",
    description:
      "Built a wearable prototype combining ultrasonic obstacle detection with real-time audio feedback.",
    detail:
      "Integrated sensor timing, embedded control logic, and DFPlayer Mini audio output. This hardware prototype is distinct from the later MedSight software project.",
    github: "https://github.com/adheeshram/vision-assistance-glasses",
    thumbnail: process.env.PUBLIC_URL + "/vision-glasses-thumbnail.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="fade-in">
      <div className="section-heading">
        <p className="eyebrow">Selected builds</p>
        <h2>Engineering work</h2>
        <p>Hardware, software, and full-stack prototypes—documented with their actual scope and outcomes.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-thumb-wrapper">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumb"
                style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
              />
            </div>
            <div className="project-card-body">
            {project.period ? <p className="project-period">{project.period}</p> : null}
            <h3>{project.title}</h3>
            <p className="project-role">{project.role}</p>
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
            <details className="project-details">
              <summary>Technical details</summary>
              <p>{project.detail}</p>
            </details>
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
          </article>
        ))}
      </div>
      <p className="project-note">
        In progress: a separate Verilog-focused research project is being organized; details will be added when the scope is finalized.
      </p>
    </section>
  );
}
