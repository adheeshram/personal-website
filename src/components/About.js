import React from "react";
import MyPhoto from "../assets/Adheesh_Ramanath_Picture.png";

export default function About() {
  return (
    <section id="about" className="fade-in">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            Hi, I'm Adheesh Ramanath, a junior at Plano West High School passionate about technology, engineering, and AI. I enjoy solving challenges and creating innovative solutions.
          </p>
          <p className="quote">"The best way to predict the future is to invent it." – Alan Kay</p>
        </div>
        <div className="about-photo">
          <img src={MyPhoto} alt="Adheesh Ramanath" />
        </div>
      </div>
    </section>
  );
}
