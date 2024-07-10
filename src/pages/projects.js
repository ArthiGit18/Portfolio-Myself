import React from 'react';
import IntersectionObserverWrapper from '../hooks/UseIntersectionObserver'; // Adjust the import path as needed

const Projects = () => {
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
                            <p>Eu eu nisi non ad elit. Pariatur tempor aliqua eiusmod cillum pariatur ea cillum nostrud quis veniam Lorem sint nisi sunt. Non minim sit consequat amet sunt qui non adipisicing laborum enim id ad cupidatat nostrud.</p>
                        </div>
                        <div className='project_screenshot'>
                            <img src="/assets/projects/Rsl Lifestyle.png" alt="RSL LifeStyle" className='project-img' />
                            <h2>RSL LifeStyle</h2>
                        </div>
                        <div className='vector_bg'>
                            <img src="/assets/vector/Gradient.png" alt="blobe" className='blobe-img' />
                        </div>
                    </IntersectionObserverWrapper>

                    <IntersectionObserverWrapper className='projects_item2' onVisibleClass='project-slide-in'>
                        <div className='project_motive'>
                            <p>Eu eu nisi non ad elit. Pariatur tempor aliqua eiusmod cillum pariatur ea cillum nostrud quis veniam Lorem sint nisi sunt. Non minim sit consequat amet sunt qui non adipisicing laborum enim id ad cupidatat nostrud.</p>
                        </div>
                        <div className='project_screenshot'>
                            <img src="/assets/projects/BeyondCasa.png" alt="BeyondCasa Real Estate" className='project-img' />
                            <h2>BeyondCasa Real Estate</h2>
                        </div>
                        <div className='vector_bg1'>
                            <img src="/assets/vector/Gradient.png" alt="blobe" className='blobe-img' />
                        </div>
                    </IntersectionObserverWrapper>

                    <IntersectionObserverWrapper className='projects_item1' onVisibleClass='project-slide-in'>
                        <div className='project_motive'>
                            <p>Eu eu nisi non ad elit. Pariatur tempor aliqua eiusmod cillum pariatur ea cillum nostrud quis veniam Lorem sint nisi sunt. Non minim sit consequat amet sunt qui non adipisicing laborum enim id ad cupidatat nostrud.</p>
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
