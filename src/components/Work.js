import React from "react";

export default function Work() {
  return (
    <section id="work" className="fade-in">
      <h2>Where I’ve Worked</h2>

      {/* Shining Mindz */}
      <div className="work-entry">
        <a href="https://shiningmindz.com" target="_blank" rel="noopener noreferrer">
          <img
            src={process.env.PUBLIC_URL + "/shining-mindz-logo.png"}
            alt="Shining Mindz Logo"
            className="company-logo"
          />
        </a>
        <div className="work-info">
          <a
            href="https://shiningmindz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="company-name-link"
          >
            <h3>Shining Mindz</h3>
          </a>
          <h4>Software Development Intern</h4>
          <p className="work-dates">June 2025 – August 2025</p>
          <p>
            Developed automated scripts to extract and clean data from PowerPoint presentations
            into structured Excel sheets. Implemented validation and error-checking to ensure
            data accuracy. Improved processing speed of data extraction by 30% through optimized
            algorithms and workflow enhancements.
          </p>
        </div>
      </div>

      {/* Plano West Robotics */}
      <div className="work-entry">
        <img
          src={process.env.PUBLIC_URL + "/robotics-logo.png"}
          alt="Plano West Robotics"
          className="company-logo"
        />
        <div className="work-info">
          <h3>Plano West Robotics Team</h3>
          <h4>Robotics Engineer</h4>
          <p className="work-dates">August 2025 – May 2026</p>
          <p>
            Worked on a competitive robotics team designing and refining mechanical systems for UIL
            competitions. Focused on building reliable mechanisms, coordinating actuation systems,
            and collaborating closely during testing and iteration to improve overall robot
            performance.
          </p>
        </div>
      </div>

    </section>
  );
}
