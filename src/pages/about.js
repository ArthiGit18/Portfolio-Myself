import React from 'react';
import IntersectionObserverWrapper from '../hooks/UseIntersectionObserver'; // Adjust the import path as needed

const About = () => {
    return (
        <div>
            <div className='container'>
                <IntersectionObserverWrapper className='about_wrapper' onVisibleClass='content-slide-down'>
                    <IntersectionObserverWrapper className='about_header' onVisibleClass='header-slide-down'>
                        <div className='rule'></div>
                        <h2>About</h2>
                    </IntersectionObserverWrapper>

                    <p>
                        I am A. Arthi, a passionate frontend web developer with 9 months of professional experience. Throughout my career, I have been involved in a variety of real-time projects such as Rsl Lifestyle, Beyond Casa, and WMS, where I honed my skills in building responsive and user-friendly web applications. My expertise lies in utilizing technologies like React, Bootstrap, and integrating dynamic functionalities to create seamless user experiences. I thrive in collaborative environments and am always eager to take on new challenges in web development.
                    </p>
                </IntersectionObserverWrapper>
            </div>
        </div>
    );
};

export default About;
