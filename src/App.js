import React from "react";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import useFadeInOnScroll from "./components/useFadeInOnScroll";
import "./style.css";

function App() {
  useFadeInOnScroll();

  return (
    <>
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
