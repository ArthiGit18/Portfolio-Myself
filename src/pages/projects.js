import React from 'react';
import IntersectionObserverWrapper from '../hooks/UseIntersectionObserver'; // Adjust the import path as needed

const Projects = () => {

    const handleLinkClick = () => {
        window.open('https://royalsmartlifestyle.com/', '_blank');
      };
    const handleLinkClickBeyondcasa = () => {
        window.open('https://beyondcasa.ae/', '_blank');
      };
    const handleLinkClickKornerston = () => {
        window.open('https://www.kornerston.com/', '_blank');
      };

    return (
        <div className='container'>
            <IntersectionObserverWrapper className='projects_wrapper' onVisibleClass='slide-up'>
                <IntersectionObserverWrapper className='projects_header' onVisibleClass='header-slide-in'>
                    <div className='rule_project'></div>
                    <h2>Projects</h2>
                </IntersectionObserverWrapper>

                <div className='projects_list'>
                    <IntersectionObserverWrapper className='projects_item1' onVisibleClass='project-slide-in'>
                        <div className='project_motive'>
                            <p>Built a MERN stack Travel and Tourism web app enabling bookings for hotels, cars, flights, and attractions. Enhanced frontend performance by 30% and integrated third-party APIs for seamless reservations. Developed an intuitive admin panel and collaborated cross-functionally to deliver timely solutions.</p>
                        </div>
                        <div className='project_screenshot'>
                            <img src="/assets/projects/Rsl Lifestyle.png" alt="RSL LifeStyle" className='project-img' />
                            <h2 onClick={handleLinkClick}>Visit : RSL LifeStyle</h2>
                        </div>
                        <div className='vector_bg'>
                            <img src="/assets/vector/Gradient.png" alt="blobe" className='blobe-img' />
                        </div>
                    </IntersectionObserverWrapper>

                    <IntersectionObserverWrapper className='projects_item2' onVisibleClass='project-slide-in'>
                        <div className='project_motive'>
                            <p>Developed a MERN-based property listing platform with robust search filters and responsive design. Optimized backend management with an intuitive admin panel.</p>
                        </div>
                        <div className='project_screenshot'>
                            <img src="/assets/projects/BeyondCasa.png" alt="BeyondCasa Real Estate" className='project-img' />
                            <h2 onClick={handleLinkClickBeyondcasa}>Visit : BeyondCasa</h2>
                        </div>
                        <div className='vector_bg1'>
                            <img src="/assets/vector/Gradient.png" alt="blobe" className='blobe-img' />
                        </div>
                    </IntersectionObserverWrapper>

                    <IntersectionObserverWrapper className='projects_item1' onVisibleClass='project-slide-in'>
                        <div className='project_motive'>
                            <p>Created a responsive academy website using Next.js and CSS for Kornerston Academy. Implemented a user-friendly interface with optimal viewing across devices, emphasizing performance and design coherence.</p>
                        </div>
                        <div className='project_screenshot'>
                            <img src="/assets/projects/Kornerston.png" alt="Kornerston Academy" className='project-img' />
                            <h2 onClick={handleLinkClickKornerston}>Visit : Kornerston Academy</h2>
                        </div>
                        <div className='vector_bg'>
                            <img src="/assets/vector/Gradient.png" alt="blobe" className='blobe-img' />
                        </div>
                    </IntersectionObserverWrapper>

                    <IntersectionObserverWrapper className='projects_item2' onVisibleClass='project-slide-in'>
                        <div className='project_motive project_motive'>
                            <p>Utilized React, HTML, CSS, Bootstrap, and Material-UI components to clone multiple websites efficiently. Employed clean code practices to replicate diverse designs while ensuring responsiveness and functionality across different platforms and devices.</p>
                        </div>
                        <div className='project_screenshot'>
                            <img src="/assets/projects/gravity team.png" alt="Gravity Team Clone" className='project-img' />
                            <h2>Gravity Team Clone</h2>
                        </div>
                        <div className='vector_bg'>
                            <img src="/assets/vector/Gradient.png" alt="blobe" className='blobe-img' />
                        </div>
                    </IntersectionObserverWrapper>
                </div>
            </IntersectionObserverWrapper>
        </div>
    );
};

export default Projects;
