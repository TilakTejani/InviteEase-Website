import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
    size?: number;
    className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 80, className = "" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            {/* Rotating Ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-inviteease-primary border-r-inviteease-primary/30"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Pulsing Static Icon */}
            <motion.div
                className="relative z-10 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ width: size * 0.7, height: size * 0.7 }}
            >
                <img
                    src="/icon-circluar.png"
                    alt="Loading..."
                    className="w-full h-full object-contain pointer-events-none select-none"
                />
            </motion.div>
        </div>
    );
};

export default Loader;
