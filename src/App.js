import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import useFadeInOnScroll from "./components/useFadeInOnScroll";
import "./style.css";

function App() {
  useFadeInOnScroll();
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle("theme-dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main className="container">
        <About />
        <Work />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
