// import React, { useRef, useEffect } from 'react';

// const IntersectionObserverWrapper = ({ children, className, onVisibleClass }) => {
//     const wrapperRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add(onVisibleClass);
//                     }
//                 });
//             },
//             {
//                 threshold: 0.1, // Adjust this value as needed
//             }
//         );

//         if (wrapperRef.current) {
//             observer.observe(wrapperRef.current);
//         }

//         return () => {
//             if (wrapperRef.current) {
//                 observer.unobserve(wrapperRef.current);
//             }
//         };
//     }, [onVisibleClass]);

//     return (
//         <div ref={wrapperRef} className={className}>
//             {children}
//         </div>
//     );
// };

// export default IntersectionObserverWrapper;


import React, { useRef, useEffect } from 'react';

const IntersectionObserverWrapper = ({ children, className, onVisibleClass, delay = 0 }) => {
    const wrapperRef = useRef(null);

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
    }, [delay, onVisibleClass]);

    return (
        <div ref={wrapperRef} className={className}>
            {children}
        </div>
    );
};

export default IntersectionObserverWrapper;

