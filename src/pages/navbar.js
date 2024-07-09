import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar_wrapper'>
    <img src="logoRT (1).png" alt="Logo" />
    <div className='navbar_list'>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">PROJECTS</a></li>
        <li><a href="#">SKILLS</a></li>
        <li><a href="#">EXPERIENCE</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar