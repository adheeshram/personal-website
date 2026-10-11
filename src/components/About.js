import React from "react";
import MyPhoto from "../assets/Adheesh_Ramanath_Picture.png";

export default function About() {
  return (
    <section id="about" className="fade-in">
      <div className="about-container">
        <div className="about-text">
          <p className="eyebrow">Embedded systems · robotics · physical AI</p>
          <h1>Adheesh Ramanath</h1>
          <p className="about-intro">
            I build systems that connect software intelligence to physical hardware.
          </p>

          <p className="about-copy">
            I’m a senior at Plano West Senior High School in Plano, Texas, graduating in May 2027. My work spans executable physical-system modeling, competition robotics, embedded sensing, and full-stack prototypes—with a focus on making complex systems testable and reliable.
          </p>

          <div className="about-actions">
            <a className="btn btn-primary" href="#projects">
              Explore my work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="about-photo">
          <img src={MyPhoto} alt="Adheesh Ramanath" />
          <div className="photo-caption">
            <span>Plano, Texas</span>
            <span>Class of 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
}
