import React from "react";

export default function Research() {
  return (
    <section id="research" className="fade-in">
      <div className="research-compact">
        <div className="research-summary">
          <p className="eyebrow">Research experience</p>
          <h2>Physical-system model generation</h2>
          <div className="research-meta">
            <span>Georgia Institute of Technology</span>
            <span>Student Researcher</span>
            <span>June–October 2026</span>
          </div>
          <p>
            Working with Prof. Sriram Vishwanath’s ECE research team, I led the robotics/Modelica pipeline for translating natural-language descriptions into compiled, executable physical-system models.
          </p>
        </div>
        <ul className="research-responsibilities">
          <li>Built an NL-to-DSL verification harness spanning specification normalization, retrieval, multi-expert generation, compiler validation, FMU export, simulation, behavioral verification, specification alignment, automated repair, and evidence collection.</li>
          <li>Diagnosed and hardened FMI, compiler, initialization, numerical-stability, discontinuity, bounded-state, and incomplete-trace failures.</li>
          <li>Developed resumable experiment infrastructure with provenance tracking, checkpointing, failure tracing, infrastructure-only retries, and documented mentor handoffs.</li>
        </ul>
      </div>
    </section>
  );
}
