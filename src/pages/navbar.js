import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar_wrapper'>
      <img src="logoRT (1).png" alt="Logo" />
      <div className='navbar_list'>
        <ul>
          <li>
            <ScrollLink to="hero" smooth={true} duration={500}>
              HOME
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              ABOUT
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              PROJECTS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth={true} duration={500}>
              SKILLS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="experience" smooth={true} duration={500}>
              EXPERIENCE
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
