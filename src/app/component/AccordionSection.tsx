'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const accordionData = [
    {
        id: "1",
        title: 'Brand Strategy',
        typo1: "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
        typo2: [
            "Research & Insights",
            "Purpose, Mission, Vision",
            "Value Proposition",
            "Personality Traits",
            "Verbal Identity",
            "Naming"
        ],
        video: "Website_Low.mp4",
        color: "#C3ABFF"
    },
    {
        id: "2",
        title: 'Visual Identity',
        typo1: "Visual identity communicates the brand’s personality through design. It's what people see and remember.",
        typo2: [
            "Logo Design",
            "Typography",
            "Color Palette",
            "Graphic Elements",
            "Design System"
        ],
        video: "Identity_Low.mp4",
        color: "#FFFFFF"
    },
    {
        id: "3",
        title: 'Website',
        typo1: "Your website is the digital face of your brand. It should be intuitive, engaging, and optimized for conversion.",
        typo2: [
            "UX/UI Design",
            "Responsive Development",
            "CMS Integration",
            "SEO Foundations"
        ],
        video: "Product_Low.mp4",
        color: "#FED35B"
    },
    {
        id: "4",
        title: 'Product',
        typo1: "Product design bridges function and experience. It's about solving user problems in elegant ways.",
        typo2: [
            "Product Strategy",
            "Wireframes & Prototypes",
            "User Testing",
            "Interaction Design"
        ],
        video: "Strategy_New.mp4",
        color: "#1E1E1E"
    },
];

export default function AccordionSection() {
    return (
        <section className="relative">
            {accordionData.map((item, index) => (
                <AccordionItem key={item.id} item={item} index={index} />
            ))}
        </section>
    );
}

function AccordionItem({ item, index }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: '-30% 0px -30% 0px', once: false });

    return (
        <div
            ref={ref}
            className="h-screen sticky top-0 flex items-center justify-center"
            style={{
                zIndex: index + 1,
            }}
        >
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-[90%] h-[90vh] p-12 rounded-3xl flex justify-between items-center shadow-xl overflow-hidden transition-all"
                style={{
                    backgroundColor: item.color,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div className={`${index === 3 ? "text-white" : "text-black"} w-1/2 space-y-6`}>
                    <h4 className={`${index === 3 ? "text-white" : "text-black"} text-4xl font-bold`}>{item.title}</h4>
                    <p className="text-lg">{item.typo1}</p>
                    <ul className="list-disc pl-5 text-lg space-y-1">
                        {item.typo2.map((point: string, idx: number) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>

                <div className="w-1/2 rounded-xl overflow-hidden">
                    {isInView && (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-cover scale-110 transition-transform duration-700"
                        >
                            <source src={`/video/${item.video}`} type="video/mp4" />
                        </video>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
