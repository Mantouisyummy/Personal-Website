"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({
  className = "",
}: AnimatedBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const total = 60;
    const generated = Array.from({ length: total }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2, // 粒子大小
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.5 + 0.4,
    }));
    setParticles(generated);
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* 粒子動畫 */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-emerald-400"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            opacity: p.opacity,
            filter: "blur(1px)",
            boxShadow: `0 0 6px #00ff99, 0 0 12px #00ff99`,
          }}
          animate={{
            y: ["0%", "-10%", "0%"],
            opacity: [p.opacity, 0.2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
