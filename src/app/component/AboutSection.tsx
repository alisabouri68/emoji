"use client";
import React, { useState, useEffect, useRef } from 'react';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';

const slides = [
    {
        id: "1",
        count: 100,
        title: "global media features, including the New York Times, Forbes, TechCrunch, Bloomberg, and Hypebeast.",
    },
    {
        id: "2",
        count: 40,
        title: "Nominations and Awards celebrating our passion",
    },
    {
        id: "3",
        count: 28,
        title: "Startups we have helped in their growth journey over the past 5 years",
    },
];

export default function AboutSection() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

    // افکت برای اسلاید اتوماتیک
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (autoPlay && isInView) {
            interval = setInterval(() => {
                setActiveSlide(prev => (prev + 1) % slides.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [autoPlay, isInView]);

    // هندلرهای ناوبری
    const handleNext = () => {
        setAutoPlay(false);
        setActiveSlide(prev => (prev + 1) % slides.length);
        setTimeout(() => setAutoPlay(true), 5000);
    };

    const handlePrev = () => {
        setAutoPlay(false);
        setActiveSlide(prev => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setAutoPlay(true), 5000);
    };

    // انیمیشن‌های ورودی
    const rightSectionVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2
            }
        }
    };

    return (
        <section ref={sectionRef} className='h-screen flex flex-col md:flex-row gap-8 p-8'>
            {/* بخش سمت چپ (اسلایدر) */}
            <div className='w-full md:w-2/5 flex flex-col justify-between'>
                <div className='space-y-8'>
                    {slides.map((item, index) => (
                        <div
                            key={item.id}
                            className={`transition-opacity duration-500 ${index === activeSlide ? 'opacity-100' : 'opacity-0 absolute'
                                }`}
                        >
                            <div className='flex justify-between items-start mb-4'>
                                <div className='text-sm text-gray-500'>
                                    <span>Serious Facts</span>
                                </div>
                                <div className='text-xs text-gray-400'>
                                    0{index + 1} / 0{slides.length}
                                </div>
                            </div>

                            <div className='border-b border-gray-200 mb-4'></div>

                            <div className='mb-2'>
                                <h6 className='text-4xl font-bold text-gray-800'>
                                    {item.count}+
                                </h6>
                            </div>

                            <div className='text-lg text-gray-600 leading-relaxed'>
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className='flex gap-4 mt-8'>
                    <button
                        onClick={handlePrev}
                        className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                    >
                        <FaLongArrowAltLeft className='text-2xl text-gray-600' />
                    </button>
                    <button
                        onClick={handleNext}
                        className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                    >
                        <FaLongArrowAltRight className='text-2xl text-gray-600' />
                    </button>
                </div>      </div>

            {/* بخش سمت راست با انیمیشن */}
            <motion.div
                className='w-full md:w-3/5 flex flex-col items-center justify-center relative'
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={rightSectionVariants}
            >
                <h3 className='text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-8 leading-tight'>
                    Crafting premium brands for startups that make people smile
                </h3>

                <div className='relative group mt-8'>
                    <div className='absolute -top-2 -left-4 bg-orange-50 rounded-full p-3 transition-all duration-700 group-hover:translate-x-32 group-hover:rotate-[360deg]'>
                        <BsEmojiSmileFill className='text-xl text-orange-400 animate-pulse' />
                    </div>
                    <div className='bg-amber-50 rounded-full px-6 py-2 text-sm font-medium text-amber-900 shadow-sm transition-transform duration-300 group-hover:scale-105'>
                        About Us
                    </div>
                </div>
            </motion.div>
        </section>
    )
}