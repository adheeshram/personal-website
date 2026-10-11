import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="fade-in">
      <p className="eyebrow">Let’s connect</p>
      <h2>Contact</h2>
      <p className="contact-copy">I’m always glad to talk about engineering, research, or opportunities to contribute.</p>
      <div className="social-links">
        <a
          href="https://github.com/adheeshram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social-link github"
        >
          <i className="fab fa-github" aria-hidden="true"></i>
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/adheeshramanath"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-link linkedin"
        >
          <i className="fab fa-linkedin" aria-hidden="true"></i>
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:adheeshk.ramanath@gmail.com"
          aria-label="Email"
          className="social-link email"
        >
          <i className="fas fa-envelope" aria-hidden="true"></i>
          <span>Email</span>
        </a>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Adheesh Ramanath</p>
    </section>
  );
}
