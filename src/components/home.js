import React from 'react';
import Hero from '../pages/hero';
import About from '../pages/about';
import Skills from '../pages/skills';
import Projects from '../pages/projects';
import Links from '../pages/links';
import Experience from '../pages/experience';
import Footer from '../pages/footer';

export const Home = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="links">
        <Links />
      </div>
      <hr style={{ color: 'white' }} />
      <Footer />
    </>
  );
};

export default Home;
