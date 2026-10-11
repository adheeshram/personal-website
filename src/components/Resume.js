import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="fade-in">
      <div className="resume-panel">
        <div>
          <p className="eyebrow">One-page overview</p>
          <h2>Résumé</h2>
          <p>Research, engineering, teaching, and leadership experience in a concise PDF.</p>
        </div>
        <div className="resume-actions">
          <a className="btn btn-primary" href={process.env.PUBLIC_URL + "/Adheesh_Ramanath_Resume.pdf"} target="_blank" rel="noopener noreferrer">Open résumé</a>
          <a className="text-link" href={process.env.PUBLIC_URL + "/Adheesh_Ramanath_Resume.pdf"} download>Download PDF</a>
        </div>
      </div>
    </section>
  );
}
