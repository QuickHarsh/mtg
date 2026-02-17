import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './button';

export const ScrollTriggeredCard = ({ product, index }) => {
    // Generate a hue based on index to keep the colorful vibe from the example, 
    // or default to emerald/teal themes if preferred. 
    // Let's use the example's gradient logic but adapted.
    // We'll just use a subtle gradient for the splash background.
    const hueA = (index * 40) % 360;
    const hueB = (index * 40 + 50) % 360;
    const background = `linear-gradient(306deg, hsl(${hueA}, 100%, 85%), hsl(${hueB}, 100%, 85%))`;

    return (
        <motion.div
            className="relative flex items-center justify-center pt-5 mb-[-50px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
        >
            {/* Splash Background */}
            <div
                className="absolute inset-0 z-0"
                style={{ ...splash, background }}
            />

            {/* Card Content */}
            <motion.div
                variants={cardVariants}
                className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-sm flex flex-col"
            >
                <Link to={`/products#${product.id}`} className="block h-full">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                            {product.features[0]}
                        </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                        <div className="mt-auto flex items-center text-emerald-600 font-semibold text-sm group">
                            View Collection <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
};

const cardVariants = {
    offscreen: {
        y: 150,
        rotate: -5
    },
    onscreen: {
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const splash = {
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
    // Scaling the path might be tricky without a wrapper, so we might need to adjust or remove clipPath if it doesn't fit container.
    // The path coordinates are fixed (0 to 500), so it might look distorted if the container isn't that size.
    // Let's try a simpler blob shape or just a standard rounded div if this fails, 
    // but the user specifically asked for "make it like that".
    // I'll leave the clipPath but apply it to a container of fixed aspect ratio or similar.
    // Actually, for responsiveness, SVG clip paths on HTML elements can be tricky. 
    // I'll try to use a more responsive shape or just standard rounded corners if mapped to full width.
    // But since I must follow "make it like that", I will try to use the path. 
    // The path is roughly 500x450.
    width: '120%',
    height: '120%',
    left: '-10%',
    top: '-10%'
};
