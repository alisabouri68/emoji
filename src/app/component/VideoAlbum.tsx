'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  p: string;
  video: string;
}

const videoList = [
  {
    id: "1",
    title: "Rudy Capital | Turning crypto complexity into clarity",
    p: "Strategy - Visual Identity - Website",
    video: "/video/1.mp4"
  },
  {
    id: "2",
    title: "MissionZero | Carbon Reinvented",
    p: "Strategy - Visual Identity - Website",
    video: "/video/2.mp4"
  },
  {
    id: "3",
    title: "Yuri | Biotech in a space for a better life on earth",
    p: "Strategy - Visual Identity - Website",
    video: "/video/3.mp4"
  },
  {
    id: "4",
    title: "Otterspace | Unleashing the Power of Communities",
    p: "Strategy - Visual Identity - Website",
    video: "/video/4.mp4"
  },
  {
    id: "5",
    title: "Quivo | Logistics Made Simple",
    p: "Strategy - Visual Identity - Website",
    video: "/video/5.mp4"
  },
  {
    id: "6",
    title: "Rudy Capital | Turning crypto complexity into clarity",
    p: "Strategy - Visual Identity - Website",
    video: "/video/6.mp4"
  },
];

export default function VideoAlbum() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const sectionInView = useInView(sectionRef, {
    margin: "-30% 0px",
    once: false
  });

  useEffect(() => {
    setIsSectionInView(sectionInView);
  }, [sectionInView]);
  const scrollBy = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: offset,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      ref={sectionRef}
      className={`py-20 text-white relative overflow-hidden transition-colors duration-500 ${isSectionInView ? 'bg-black' : 'bg-[#FBC1D4]'
        }`}>
      <div className="mb-10 px-8">
        <h2 className="text-4xl font-bold">Selected Work</h2>
        <p className="text-lg text-gray-400">Explore some of our recent projects</p>
      </div>

      {/* Scroll Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
        <button
          onClick={() => scrollBy(-window.innerWidth * 0.8)}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
        <button
          onClick={() => scrollBy(window.innerWidth * 0.8)}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex gap-6 px-8 pb-5 h-max overflow-x-auto scrollbar-hide"
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          scrollSnapType: 'x mandatory',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        onWheel={(e) => {
          if (containerRef.current) {
            containerRef.current.scrollLeft += e.deltaY * 0.8;
          }
        }}
      >
        {videoList.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function VideoCard({ item }: { item: VideoItem }) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px", amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="min-w-[80vw] md:min-w-[40vw] flex-shrink-0 rounded-3xl overflow-hidden bg-gray-900 shadow-2xl"
      style={{ scrollSnapAlign: 'center' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="relative">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-[60vh] object-cover"
        >
          <source src={item.video} type="video/mp4" />
        </video>
        <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-300">{item.p}</p>
        </div>
      </div>
    </motion.div>
  );
}