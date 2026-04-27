import React, { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const items = useMemo(() => NAV_ITEMS, []);
  const [activeId, setActiveId] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sectionEls = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        threshold: [0.25, 0.4, 0.55, 0.7],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    let rafId = null;

    const update = () => {
      rafId = null;
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight || 0;
      const winHeight = window.innerHeight || 0;
      const max = Math.max(1, docHeight - winHeight);
      const next = Math.min(1, Math.max(0, scrollTop / max));
      setScrollProgress(next);
    };

    const onScroll = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafId != null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="nav-shell">
      <nav className="nav" aria-label="Primary">
        <a href="#about" className="nav-brand" onClick={handleNavClick}>
          <span className="nav-mark">AR</span>
          <span className="nav-name">Adheesh Ramanath</span>
        </a>

        <button
          className="nav-burger"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeId === item.id ? "active" : ""}`}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}

          <button
            type="button"
            className="theme-toggle"
            onClick={() => {
              setIsMenuOpen(false);
              onToggleTheme();
            }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <i
              className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}
              aria-hidden="true"
            />
            <span className="theme-label">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>
      </nav>
      <div className="scroll-progress" aria-hidden="true">
        <div
          className="scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
    </div>
  );
}
