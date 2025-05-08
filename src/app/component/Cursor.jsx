"use client"
import { useEffect, useRef } from 'react';

const Cursor = () => {
    const mouseRef = useRef(null);

    useEffect(() => {
        const mouseElement = mouseRef.current;

        const handleMouseMove = (e) => {
            if (mouseElement) {
                mouseElement.style.top = `${e.clientY}px`;
                mouseElement.style.left = `${e.clientX}px`;
                mouseElement.style.boxShadow = '0 0 500px 100px rgba(255, 255, 255, 0.25)';
            }
        };

        if (typeof window !== 'undefined') {
            document.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (typeof window !== 'undefined') {
                document.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <div
            ref={mouseRef}
            className='w-2.5 h-2.5 bg-pink-400 rounded-full pointer-events-none'
            style={{
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)',
                transition: 'transform 0.1s ease-out',
            }}
        />
    );
};

export default Cursor;