import React, { useState, useEffect } from 'react';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle the scroll event and update visibility
    const handleScroll = () => {
        if (window.scrollY > 500) { 
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to handle scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        isVisible && (
            <div
                className='h-8 w-8 rounded-md text-center bg-slate-500 fixed bottom-6 right-6 cursor-pointer p-1 hover:bg-slate-600'
                onClick={scrollToTop}
            >
                <svg
                    baseProfile="tiny"
                    height="24px"
                    version="1.2"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{ fill: 'white' }}
                >
                    <g id="Layer_1">
                        <path d="M13,5.586l-4.707,4.707c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0L12,9.414V17c0,0.552,0.447,1,1,1 s1-0.448,1-1V9.414l2.293,2.293C16.488,11.902,16.744,12,17,12s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L13,5.586z" />
                    </g>
                </svg>
            </div>
        )
    );
};

export default ScrollUp;
