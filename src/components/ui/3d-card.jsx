import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const ThreeDCard = ({ children, className, containerClassName }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
            }}
            className={`relative flex items-center justify-center rounded-xl p-2.5 ${containerClassName}`}
        >
            <motion.div
                style={{
                    transformStyle: "preserve-3d",
                    rotateX,
                    rotateY,
                }}
                className={`absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-emerald-500/20 to-purple-500/20 shadow-xl transition-all duration-200 ease-linear ${className}`}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export const CardBody = ({ children, className }) => {
    return (
        <div
            className={`h-full w-full [transform-style:preserve-3d] ${className}`}
        >
            {children}
        </div>
    );
};

export const CardItem = ({
    as: Component = "div",
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}) => {
    return (
        <Component
            className={`w-full transition-all duration-200 ease-linear ${className}`}
            style={{
                transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
            }}
            {...rest}
        >
            {children}
        </Component>
    );
};
