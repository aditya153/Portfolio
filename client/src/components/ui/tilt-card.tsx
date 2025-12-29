import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    tiltIntensity?: number; // How much the card tilts (default: 10)
    glareEnabled?: boolean; // Whether to show glare effect
    glareOpacity?: number; // Glare opacity (default: 0.15)
    scale?: number; // Scale on hover (default: 1.02)
}

export function TiltCard({
    children,
    className = "",
    tiltIntensity = 10,
    glareEnabled = true,
    glareOpacity = 0.15,
    scale = 1.02,
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate mouse position relative to card center (-1 to 1)
        const mouseX = (e.clientX - centerX) / (rect.width / 2);
        const mouseY = (e.clientY - centerY) / (rect.height / 2);

        // Apply rotation (inverted for natural feel)
        setRotateX(-mouseY * tiltIntensity);
        setRotateY(mouseX * tiltIntensity);

        // Calculate glare position (percentage)
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        setGlarePosition({ x: glareX, y: glareY });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
        setGlarePosition({ x: 50, y: 50 });
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX,
                rotateY,
                scale: isHovered ? scale : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.5,
            }}
            style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
        >
            {/* Content */}
            <div style={{ transform: "translateZ(0)" }}>
                {children}
            </div>

            {/* Glare effect overlay */}
            {glareEnabled && (
                <div
                    className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
                    style={{
                        background: isHovered
                            ? `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 60%)`
                            : "transparent",
                        transition: isHovered ? "none" : "background 0.3s ease",
                    }}
                />
            )}
        </motion.div>
    );
}
