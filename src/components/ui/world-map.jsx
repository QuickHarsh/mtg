"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export function WorldMap({
    dots = [],
    lineColor = "#34d399",
}) {
    const svgRef = useRef(null);

    // Map image SVG path (simplified world map dots)
    // Using a background image for the dots to keep it performant and clean
    // The Dotted Map is usually a background image or SVG pattern in these components
    // For this implementation, we'll use a standard dotted map SVG pattern or image if available, 
    // or render a simplified set of dots. 
    // Given the constraints, I will use a high-quality SVG path for the map background.

    return (
        <div className="w-full aspect-[2/1] bg-slate-950 rounded-lg relative overflow-hidden font-sans">
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black)]" />

            {/* Map Background */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8f/World_map_nations_mono.svg"
                alt="world map"
                className="h-full w-full object-cover opacity-80 pointer-events-none select-none contrast-100"
            />




            <div className="absolute inset-0 z-10">
                <svg
                    ref={svgRef}
                    viewBox="0 0 1000 500"
                    className="w-full h-full pointer-events-none select-none"
                >
                    {dots.map((dot, i) => (
                        <g key={`dot-${i}`}>
                            <circle
                                cx={dot.x}
                                cy={dot.y}
                                r={3}
                                fill={lineColor}
                                className="animate-pulse"
                            />
                            <circle
                                cx={dot.x}
                                cy={dot.y}
                                r={8}
                                fill={lineColor}
                                opacity="0.2"
                                className="animate-ping"
                            />
                            {/* Ripple effect or lines can be added here */}
                        </g>
                    ))}

                    {/* Connecting Lines (optional, can be added if we define paths) */}
                    {dots.map((dot, i) => {
                        if (i === dots.length - 1) return null;
                        const nextDot = dots[i + 1];
                        return (
                            <motion.path
                                key={`line-${i}`}
                                d={`M ${dot.x} ${dot.y} Q ${(dot.x + nextDot.x) / 2} ${(dot.y + nextDot.y) / 2 - 50} ${nextDot.x} ${nextDot.y}`}
                                fill="none"
                                stroke={lineColor}
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.8 }}
                                transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                            />
                        )
                    })}
                </svg>
            </div>

            {/* Floating Labels */}
            {dots.map((dot, i) => (
                <motion.div
                    key={`label-${i}`}
                    className="absolute z-20 flex flex-col items-center justify-center pointer-events-none"
                    style={{
                        left: `${(dot.x / 1000) * 100}%`,
                        top: `${(dot.y / 500) * 100}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                >
                    <div className="mt-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white font-medium border border-white/10 whitespace-nowrap">
                        {dot.label}
                    </div>
                </motion.div>
            ))}

        </div>
    );
}
