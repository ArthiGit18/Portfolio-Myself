import React, { useEffect, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';

const Links = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div className='container'>
      <div className='links_wrapper' ref={wrapperRef}>
        <div className='links_header'>
          <div className='rule'></div>
          <h2>Contact</h2>
        </div>
        <div className='contact_desc'>
          <div className='contact_content'>
            <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
            <button className='contact_btn'>
              Call <CallIcon className='contact_id1' />
            </button>
          </div>
          <div className='contact_id'>
            <a href="#"><GitHubIcon className='contact_id1' /></a>
            <a href="#"><LinkedInIcon className='contact_id1' /></a>
            <a href="#"><InstagramIcon className='contact_id1' /></a>
            <a href="#">
              <img src="/assets/website/leetcode.png" alt="Leetcode" className='contact_id1' />
            </a>
          </div>

          <div className='contact_vector'>
            <img src="/assets/website/1.png" alt="vector" className='contact_vector1' />
            <img src="/assets/website/2.png" alt="vector" className='contact_vector2' />
            <img src="/assets/website/3.png" alt="vector" className='contact_vector3' />
            <img src="/assets/website/4.png" alt="vector" className='contact_vector4' />
            <img src="/assets/website/5.png" alt="vector" className='contact_vector5' />
            <img src="/assets/website/6.png" alt="vector" className='contact_vector6' />
            <img src="/assets/website/7.png" alt="vector" className='contact_vector7' />
            <img src="/assets/website/8.png" alt="vector" className='contact_vector8' />
            <img src="/assets/website/9.png" alt="vector" className='contact_vector9' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
