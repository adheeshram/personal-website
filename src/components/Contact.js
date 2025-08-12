import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="fade-in">
      <h2>Contact Me</h2>
      <div className="social-links">
        <a
          href="https://github.com/adheeshram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/adheesh-ramanath-85522a370"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:adheeshk.ramanath@gmail.com" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}
