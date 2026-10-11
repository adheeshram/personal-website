import React from "react";

export default function Work() {
  const entries = [
    {
      organization: "Shining Mindz",
      role: "Software Development Intern",
      period: "May–August 2025",
      description: "Built and deployed a Python/VBA ETL pipeline that converted PowerPoint data into validated Excel reports, reducing processing time by 96%.",
      logo: process.env.PUBLIC_URL + "/shining-mindz-logo.png",
      url: "https://shiningmindz.com",
    },
    {
      organization: "iCode",
      role: "Paid Programming & Robotics Instructor",
      period: "Spring–Summer 2026",
      description: "Taught Python, Java, and robotics to 125+ students ages 7–14 and designed curricula for 15+ project-based camps.",
      logo: process.env.PUBLIC_URL + "/icode-logo.png",
      url: "https://icodeschool.com",
    },
  ];

  const leadership = [
    {
      organization: "HornetHacks",
      role: "Co-Founder",
      description: "Organizing an official MLH hackathon targeting 300+ students, with technology sponsors including Google Gemini. Directing partnerships, logistics, workshops, and judging; the event is in development.",
    },
    {
      organization: "Career Cartography",
      role: "Co-Founder",
      description: "Interviewed 15+ leaders, including Cineworld’s CEO, about entrepreneurship; created educational content reaching 50K+ viewers and led workshops for 500+ students nationwide.",
    },
    {
      organization: "Habitat for Humanity Club",
      role: "Founder & President",
      description: "Built a 60+ member organization, raised $2K+ for affordable housing, and organized build days, service projects, fundraisers, and outreach.",
    },
  ];

  return (
    <section id="work" className="fade-in">
      <div className="section-heading">
        <p className="eyebrow">Beyond the lab</p>
        <h2>Experience & leadership</h2>
      </div>
      <div className="work-grid">
        {entries.map((entry) => (
          <article className="work-entry" key={entry.organization}>
            <a href={entry.url} target="_blank" rel="noopener noreferrer" className="company-logo-wrap" aria-label={`Visit ${entry.organization}`}>
              <img src={entry.logo} alt="" className="company-logo" />
            </a>
            <div className="work-info">
              <p className="work-dates">{entry.period}</p>
              <h3>{entry.organization}</h3>
              <h4>{entry.role}</h4>
              <p>{entry.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="leadership-grid" aria-label="Leadership">
        {leadership.map((entry) => (
          <article className="leadership-card" key={entry.organization}>
            <p className="mini-label">{entry.role}</p>
            <h3>{entry.organization}</h3>
            <p>{entry.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
