import React, { useEffect, useRef } from 'react';

const IntersectionObserverWrapper = ({ children, className, onVisibleClass, delay = 0 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const currentElement = elementRef.current; // Copy the ref to a local variable
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

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
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
