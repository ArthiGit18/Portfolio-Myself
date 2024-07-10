import React, { useState, useEffect, useRef } from 'react';
import Navbar from './navbar';
import clsx from 'clsx';
import Loader from '../hooks/loader';
import { CircularProgress } from '@mui/material';

const Hero = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    const handleCVClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            window.open('https://drive.google.com/file/d/1V4uvAMBPm1Ttj6nqb6jDw9qaK02YOWnS/view?usp=sharing', '_blank');
            setIsLoading(false);
        }, 2000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );
        if (heroRef.current) {
            observer.observe(heroRef.current);
        }
        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <div ref={heroRef}>
            {/* <Navbar /> */}
            {isLoading && <Loader />}
            <div className='hero'>
                <div className='container'>
                    <div className={clsx('hero_wrapper', 'relative', 'overflow-hidden')}>
                        <div className={clsx('hero_content', isVisible && 'slide-down')}>
                            <span>A.ARTHI</span><br />
                            <span>FRONTEND WEB DEVELOPER</span><br />
                            <div className='hero_content-small'>
                                <small>Passionate Frontend Web Developer with a knack for crafting intuitive and responsive user interfaces using React and Bootstrap. Committed to delivering high-quality, user-friendly web applications.</small>
                            </div>
                            <button className={clsx('hero_btn', isVisible && 'slide-up')} onClick={handleCVClick}>Get My CV!</button>
                        </div>
                        <img src="/assets/myself/6.png" alt="Myself" className={clsx('myself_img', isVisible && 'slide-left')} />
                        <div className='gradient_hero'>
                            <img src='/assets/vector/Gradient.png' alt="Gradient" />
                        </div>
                        <div className="grid_background"></div>
                    </div>
                </div>
                <div className='vector_img'>
                    <img src="/assets/vector/Frame 27.png" alt="vector" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
