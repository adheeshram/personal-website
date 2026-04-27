import React from "react";
import MyPhoto from "../assets/Adheesh_Ramanath_Picture.png";

export default function About() {
  return (
    <section id="about" className="fade-in">
      <h2 className="about-title">Hi, I’m Adheesh!</h2>
      <div className="about-container">
        <div className="about-text">
          <p className="about-intro">
            I build at the intersection of AI, computer science, and engineering, creating technology with real-world impact.
          </p>

          <div className="about-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#resume">
              Resume
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="about-photo">
          <img src={MyPhoto} alt="Adheesh Ramanath" />
        </div>
      </div>
    </section>
  );
}
