import React from 'react';
import Navbar from './navbar';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Hero = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='hero'>
                <div className='container'>
                    <div className={clsx('hero_wrapper', twMerge('relative overflow-hidden'))}>
                        <div className='hero_content'>
                            <span className=''>A.ARTHI</span><br />
                            <span className=''>FRONTEND WEB DEVELOPER</span><br />
                            <div className='hero_content-small'>
                                <small>Passionate Frontend Web Developer with a knack for crafting intuitive and responsive user interfaces using React and Bootstrap. Committed to delivering high-quality, user-friendly web applications.</small>
                            </div>
                            <button className='hero_btn'>Contact Me !</button>
                        </div>
                        <img src="/assets/myself/6.png" alt="Myself" className='myself_img' />
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
