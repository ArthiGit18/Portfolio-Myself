import React from 'react';
import IntersectionObserverWrapper from '../hooks/UseIntersectionObserver'; // Adjust the import path as needed

const Skills = () => {
    return (
        <div>
            <div className='container'>
                <IntersectionObserverWrapper className='skills_wrapper' onVisibleClass='skills-slide-in'>
                    <IntersectionObserverWrapper className='skills_header' onVisibleClass='header-slide-in'>
                        <div className='rule_skills'></div>
                        <h2>Skills</h2>
                    </IntersectionObserverWrapper>

                    <div className='skills_list'>
                        <IntersectionObserverWrapper className='skills_item1' onVisibleClass='slide-in' delay={0}>
                            <h6>LANGUAGES</h6>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>Java</p>
                        </IntersectionObserverWrapper>
                        <IntersectionObserverWrapper className='skills_item2' onVisibleClass='slide-in' delay={200}>
                            <h6>FRAMEWORKS AND LIBRARIES</h6>
                            <p>React</p>
                            <p>Redux</p>
                            <p>Express.js</p>
                            <p>Node.js</p>
                            <p>Bootstrap</p>
                            <p>Material-UI (MUI)</p>
                            <p>Tailwind CSS</p>
                            <p>Sass</p>
                            <p>Formik</p>
                        </IntersectionObserverWrapper>
                        <IntersectionObserverWrapper className='skills_item3' onVisibleClass='slide-in' delay={400}>
                            <h6>DATABASES</h6>
                            <p>MongoDB</p>
                        </IntersectionObserverWrapper>
                        <IntersectionObserverWrapper className='skills_item4' onVisibleClass='slide-in' delay={600}>
                            <h6>PLATFORMS AND TOOLS</h6>
                            <p>Git</p>
                            <p>GitHub</p>
                            <p>Swagger</p>
                            <p>Postman</p>
                            <p>VS Code</p>
                            <p>IntelliJ IDEA</p>
                        </IntersectionObserverWrapper>
                    </div>

                    <div className='skills_vector'>
                        <IntersectionObserverWrapper className='vector_skill1' onVisibleClass='slide-up' delay={800}>
                            <img src="/assets/vector/Frame 27.png" alt="vector" className='vector_skill1' />
                        </IntersectionObserverWrapper>
                        <IntersectionObserverWrapper className='vector_skill2' onVisibleClass='slide-up' delay={1000}>
                            <img src="/assets/vector/Frame 28.png" alt="vector" className='vector_skill2' />
                        </IntersectionObserverWrapper>
                        <IntersectionObserverWrapper className='vector_skill3' onVisibleClass='slide-up' delay={1200}>
                            <img src="/assets/vector/logo (1).png" alt="vector" className='vector_skill3' />
                        </IntersectionObserverWrapper>
                    </div>
                </IntersectionObserverWrapper>
            </div>
        </div>
    );
};

export default Skills;
