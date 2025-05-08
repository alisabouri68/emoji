"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { BsEmojiSmile, BsEmojiSmileFill } from "react-icons/bs";

export default function Header() {
    const [active, setActive] = useState<boolean>(false);
    const [end, setEnd] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    // تابع throttle با نوع‌دهی پیشرفته
    const throttle = useCallback(<T extends (...args: unknown[]) => void>(
        func: T,
        limit: number
    ) => {
        let lastFunc: ReturnType<typeof setTimeout>;
        let lastRan: number;
        return (...args: Parameters<T>) => {
            if (!lastRan) {
                func(...args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                    if (Date.now() - lastRan >= limit) {
                        func(...args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }, []);

    useEffect(() => {
        setActive(true);
        const timer1 = setTimeout(() => setEnd(true), 3000);
        const timer2 = setTimeout(() => setActiveMenu(true), 4000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setIsScrolled(currentScroll > 0);
        };

        const throttledScroll = throttle(handleScroll, 100);

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', throttledScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', throttledScroll);
            }
        };
    }, [throttle]);

    return (
        <header className={`${end ? "h-36" : "h-screen"} bg-background w-screen flex flex-wrap justify-center items-center duration-1000 pe-5`}>

            {/* بخش عنوان اصلی */}
            <div className="child-header  hidden w-full lg:flex justify-center items-center mx-auto overflow-hidden *:text-8xl *:uppercase *:font-semibold">
                {/* حروف اول SERIOUS */}
                {['s', 'e', 'r', 'i', 'o', 'u', 's'].map((letter, index) => (
                    <div
                        key={`serious-${index}`}
                        className={`${active ? "animate-tittle-1" : ""} animation-tittle`}
                        style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    >
                        <span>{letter}</span>
                    </div>
                ))}

                {/* آیکون ایموجی */}
                <div
                    className={`${active ? "animate-tittle-2" : ""} ${end ? "emojiend" : ""} duration-1000 parent-emoji`}
                    style={{
                        animationDelay: "0.3s",
                        transform: "translateX(-900px) rotate(0)"
                    }}
                >
                    <BsEmojiSmile />
                </div>

                {/* حروف دوم BUSINESS (معکوس شده) */}
                {['b', 'u', 's', 'i', 'n', 'e', 's', 's'].reverse().map((letter, index) => (
                    <div
                        key={`business-${index}`}
                        className={`${active ? "animate-tittle-1" : ""} animation-tittle`}
                        style={{ animationDelay: `${1.5 - 0.1 * index}s` }}
                    >
                        <span>{letter}</span>
                    </div>
                ))}
            </div>

            {/* منوی بالایی */}
            <div className={`${activeMenu ? "visible opacity-100" : "invisible opacity-0"} fixed ${isScrolled ? 'top-2 sm:top-0' : 'top-20 sm:top-32'
                } w-full flex flex-col sm:flex-row items-center justify-between duration-500 px-4 sm:px-8 z-50`}>

                {/* بخش سمت چپ */}
                <div className='relative  hidden lg:flex items-center justify-center gap-3 p-2 sm:p-4 group transition-all duration-500 grow order-2 sm:order-1'>
                    <div className='hidden sm:block absolute top-0 left-2 sm:left-5 bg-orange-50 rounded-full p-1 sm:p-2 transition-transform duration-700 ease-in-out group-hover:z-auto group-hover:translate-x-16 sm:group-hover:translate-x-32 group-hover:rotate-[360deg]'>
                        <BsEmojiSmileFill className='text-lg sm:text-xl animate-pulse' />
                    </div>
                    <div className='absolute top-0 left-2 sm:left-5 rounded-full w-max bg-amber-50 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 shadow-sm transition-all duration-300 group-hover:scale-105'>Lets&apos;s Work</div>
                </div>

                {/* بخش مرکزی */}
                <article className="flex flex-col items-center gap-1 sm:gap-2 text-center grow order-1 sm:order-2 mb-4 sm:mb-0">
                    <header className="space-y-0.5 sm:space-y-1 max-w-prose">
                        <h2 className="text-base sm:text-lg md:text-xl font-light text-gray-900">
                            Branding and Digital Design
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base font-light text-gray-600">
                            Agency for Startups & Scaleups
                        </p>
                    </header>
                </article>

                {/* بخش سمت راست (منو) */}
                <div className='flex items-center w-full sm:w-96 justify-end order-3'>
                    <nav className='flex justify-end items-center w-full sm:w-auto'>
                        <ul className='w-full sm:w-auto'>
                            <li className="relative group inline-block w-full sm:w-auto">
                                <div className="relative overflow-hidden rounded-4xl transition-all duration-300 group-hover:h-[50px] w-full sm:group-hover:w-96 sm:w-16 h-10 bg-orange-50">

                                    <span className="absolute px-3 top-0 left-0 w-full h-10 flex items-center justify-center transition-transform duration-300 text-sm sm:text-base group-hover:-translate-y-full">
                                        menu
                                    </span>

                                    <ul className="absolute top-4 left-0 w-full flex flex-col sm:flex-row items-center justify-evenly gap-1 sm:gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        {['Work', 'About', 'Services', 'Blog'].map((item) => (
                                            <li
                                                key={item}
                                                className='text-gray-400 duration-500 cursor-pointer hover:text-black text-xs sm:text-sm md:text-base'
                                            >
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}