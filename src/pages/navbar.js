import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar_wrapper'>
      <img src="logoRT (1).png" alt="Logo" />
      <div className='hamburger' onClick={toggleMenu}>
        &#9776; {/* Simple hamburger icon, can be replaced with an SVG or FontAwesome icon */}
      </div>
      <div className={`navbar_list ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <ScrollLink to="hero" smooth={true} duration={500} onClick={toggleMenu}>
              HOME
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>
              ABOUT
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>
              PROJECTS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>
              SKILLS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="experience" smooth={true} duration={500} onClick={toggleMenu}>
              EXPERIENCE
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
