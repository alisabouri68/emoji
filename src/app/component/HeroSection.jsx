"use client"
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
    const heroRef = useRef(null);
    const shadowOneRef = useRef(null);
    const textShadowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current || !shadowOneRef.current || !textShadowRef.current) return;

            const clientxy = (client, elWidth) => Math.ceil((client / elWidth) * 40);
            const symmetry = (client) => Math.ceil(client / 2);

            let cx = 0;
            let cy = 0;
            const hero = heroRef.current;

            // محاسبه مقدار X
            const xValue = clientxy(e.clientX, hero.clientWidth);
            if (xValue >= 25) {
                cx = -xValue + 20;
            } else if (xValue >= 16) {
                cx = 0;
            } else {
                cx = Math.abs(xValue - 20);
            }

            // محاسبه مقدار Y
            const yValue = clientxy(e.clientY, hero.clientHeight);
            if (yValue >= 25) {
                cy = -yValue + 20;
            } else if (yValue >= 16) {
                cy = 0;
            } else {
                cy = Math.abs(yValue - 20);
            }

            // اعمال استایل‌ها
            shadowOneRef.current.style.boxShadow = `inset ${cx}px ${cy}px 10px 3px #E591AA`;
            textShadowRef.current.style.textShadow =
                `${cx}px ${cy}px 4px #E591AA , 0px 0px 16px rgba(255, 255, 255, 0.598)`;
        };

        const heroElement = heroRef.current;
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <section className="hero w-screen h-screen" ref={heroRef}>
            <div className="pointer-events-none shadow-hero w-full h-full flex justify-center items-center relative pt-60">
                {/* Shadow Layer One */}
                <div
                    ref={shadowOneRef}
                    className="pointer-events-none shadow-layer-one w-2xs h-72 z-10 absolute top-[50%] left-[50%] translate-[(-50% , -50%)] rounded-full flex justify-center items-center border-2 border-pink-200 duration-1000"
                    style={{ transform: 'translate(-50%, -50%)' }}
                />

                {/* Shadow Layer Two */}
                <div
                    className="pointer-events-none shadow-layer-two w-[285px] h-[285px] absolute top-[50%] left-[50%] translate-[(-50% , -50%)] mx-auto rounded-full flex justify-center items-center"
                    style={{
                        boxShadow: 'inset 0 0 8px 14px rgba(255, 255, 255, 0.52)',
                        transform: 'translate(-50%, -50%)'
                    }}
                />

                {/* Shadow Layer Three */}
                <div
                    className="pointer-events-none shadow-layer-three absolute top-[50%] left-[50%] translate-[(-50% , -50%)] w-[282px] h-[282px] mx-auto rounded-full"
                    style={{
                        boxShadow: 'inset 0 0 11px 4px rgba(255, 156, 156, 0.643)',
                        transform: 'translate(-50%, -50%)'
                    }}
                />

                {/* Text Shadow Layer */}
                <div
                    ref={textShadowRef}
                    className="pointer-events-none shadow-layer-four absolute top-[50%] left-[50%] w-[200px] h-[200px] mx-auto rounded-full text-[8vw] font-extrabold text-pink-200 duration-1000"
                    style={{
                        transform: 'translate(-50%, -50%)',
                        textShadow: '7px 2px 4px rgb(151, 85, 96), 10px 2px 6px rgba(255, 255, 255, 0.398)'
                    }}
                >
                    S B
                </div>
            </div>
        </section>
    );
};

export default HeroSection;