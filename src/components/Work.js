import React from "react";

export default function Work() {
  return (
    <section id="work" className="fade-in">
      <h2>Where I’ve Worked</h2>
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
    </section>
  );
}
