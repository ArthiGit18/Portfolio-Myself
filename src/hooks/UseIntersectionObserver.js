import React, { useEffect, useRef } from 'react';

const IntersectionObserverWrapper = ({ children, className, onVisibleClass, delay = 0 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add(onVisibleClass);
                        }, delay);
                    }
                });
            },
            {
                threshold: 0.1, // Adjust this value as needed
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [delay, onVisibleClass]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

export default IntersectionObserverWrapper;
