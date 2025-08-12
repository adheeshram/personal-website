import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="fade-in">
      <h2>Resume</h2>
      <div className="resume-embed">
        <iframe
          src={process.env.PUBLIC_URL + "/Adheesh_Ramanath_Resume.pdf"}
          frameBorder="0"
          width="100%"
          height="600px"
          title="Resume"
        ></iframe>
      </div>
    </section>
  );
}
