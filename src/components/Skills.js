import React from "react";

const groups = [
  { label: "Languages", items: "Python, C++, C, Java, TypeScript, JavaScript, SQL, MATLAB, VBA, Modelica" },
  { label: "Frameworks & platforms", items: "FastAPI, Next.js, React, React Native, Expo, Firebase, OpenCV, MediaPipe" },
  { label: "Engineering", items: "Fusion 360, SysML v2, sysml2-compiler, FMI/FMUs, Arduino, I2C, UART" },
  { label: "Development", items: "Git, GitHub, OpenAI API, ElevenLabs API" },
];

export default function Skills() {
  return (
    <section id="skills" className="fade-in skills-section">
      <div className="section-heading">
        <p className="eyebrow">Technical toolkit</p>
        <h2>Tools I use</h2>
      </div>
      <dl className="skills-list">
        {groups.map((group) => (
          <div key={group.label}>
            <dt>{group.label}</dt>
            <dd>{group.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
