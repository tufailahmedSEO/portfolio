"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);

    const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.15, 0.45], ["-50%", "0%"]);

    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.8], [0, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.45, 0.8], ["50%", "0%"]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center w-full px-8 lg:px-24">
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
                    Tufail Ahmed
                </h2>
                <p className="mt-4 text-xl md:text-2xl font-light text-neutral-300 tracking-wide drop-shadow-md">
                    SEO Growth Strategist.
                </p>
                <div className="mt-8 flex gap-4 pointer-events-auto">
                    <a href="mailto:tufailahmed7864@gmail.com" className="text-sm font-mono text-neutral-400 hover:text-white transition-colors">tufailahmed7864@gmail.com</a>
                    <span className="text-neutral-600">•</span>
                    <a href="https://linkedin.com/in/tufailah" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
                </div>
            </motion.div>

            <motion.div style={{ opacity: opacity2, x: x2 }} className="absolute inset-y-0 left-0 flex items-center pl-8 md:pl-24">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-lg max-w-2xl">
                    Scaling organic growth through <br />
                    <span className="text-neutral-400">AI-powered SEO workflows.</span>
                </h2>
            </motion.div>

            <motion.div style={{ opacity: opacity3, x: x3 }} className="absolute inset-y-0 right-0 flex justify-end items-center pr-8 md:pr-24 text-right">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-lg max-w-2xl">
                    10K+ links created. <br />
                    <span className="text-neutral-400">For global SaaS & E-commerce brands.</span>
                </h2>
            </motion.div>
        </div>
    );
}
