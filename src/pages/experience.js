import React, { useRef, useEffect } from 'react';

const Experience = () => {
    const expWrapperRef = useRef(null);
    const expHeaderRef = useRef(null);
    const workDetailsRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === expWrapperRef.current) {
                            expHeaderRef.current.classList.add('header-slide-in');
                        } else {
                            const index = workDetailsRefs.current.indexOf(entry.target);
                            if (index !== -1) {
                                setTimeout(() => {
                                    entry.target.classList.add('slide-in');
                                }, index * 200); // Adjust delay as needed
                            }
                        }
                    }
                });
            },
            {
                threshold: 0.1, // Adjust this value as needed
            }
        );

        if (expWrapperRef.current) {
            observer.observe(expWrapperRef.current);
        }

        workDetailsRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            if (expWrapperRef.current) {
                observer.unobserve(expWrapperRef.current);
            }
            workDetailsRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className='container'>
            <div className='exp_wrapper' ref={expWrapperRef}>
                <div className='exp_header' ref={expHeaderRef}>
                    <div className='rule_exp'></div>
                    <h2>Education & Experience</h2>
                </div>

                <div className='work'>
                    {[
                        { school: 'S.F.S Matric Hr Sec School', details: 'SSLC - MAR 2016' },
                        { school: 'SOWDAMBIKAA MATRIC HR.SEC SCHOOL', details: 'HSC - MAR 2018' },
                        { school: 'M.A.M COLLEGE OF ENGINEERING', details: 'B.E(CSE) - JUL 2022' },
                        { school: 'TECHVOLT PRIVATE LTD', details: 'WEB DEVELOPMENT (INTERN)' },
                        { school: 'FUZIONEST PRIVATE LTD', details: 'ASSOCIATE SOFTWARE DEVELOPER (9 MONTHS) - JAN 2024' },
                    ].map((item, index) => (
                        <div
                            className='work_details'
                            key={index}
                            ref={(el) => (workDetailsRefs.current[index] = el)}
                        >
                            <h6>{item.school}</h6>
                            <p>{item.details}</p>
                        </div>
                    ))}
                    <div className='work_vector'>
                        <img src='/assets/vector/Gradient.png' alt='gradient' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
