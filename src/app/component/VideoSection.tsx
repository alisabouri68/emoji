"use client";
import React, { useState, useEffect } from 'react';

export default function VideoSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // محاسبه 100vh به پیکسل
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight;

      // بررسی موقعیت اسکرول
      if (window.scrollY >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // فقط در سمت کلاینت اجرا شود
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className='h-[1100px]'>
      <video
        autoPlay
        muted 
        loop
        className={`${isScrolled
          ? "w-full translate-y-0"
          : "w-1/5 -translate-y-72"
          } h-auto transition-all duration-700 ease-out`}
      >
        <source src="/video/start.mp4" type="video/mp4" />
        مرورگر شما از تگ ویدئو پشتیبانی نمی‌کند
      </video>
    </section>
  );
}