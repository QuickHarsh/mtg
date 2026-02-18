import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const ScrollTriggeredCard = ({ product, index }) => {
    return (
        <motion.div
            className="flex flex-col h-full"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
        >
            <motion.div
                variants={cardVariants}
                className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
            >
                <Link to={`/products#${product.id}`} className="flex flex-col h-full">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                            {product.features[0]}
                        </div>

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                            {product.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                            {product.description}
                        </p>

                        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                View Details
                            </span>
                            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
};

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: (index) => ({
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
            delay: index * 0.1 // Stagger effect
        }
    })
};
