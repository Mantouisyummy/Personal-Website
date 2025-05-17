"use client";

import type React from "react";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { TypewriterEffect } from "./typewriter-effect";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    containerRef.current.style.transform = `perspective(1000px) rotateY(${
      x * 5
    }deg) rotateX(${-y * 5}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  };

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center transition-transform duration-200 ease-out"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 md:space-y-6 text-center md:text-left"
            style={{ y }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              嗨，我是{" "}
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                鰻頭
              </span>
            </motion.h1>
            <motion.div
              className="text-lg sm:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                我是{" "}
                <TypewriterEffect
                  words={[
                    "全端工程師",
                    "跨平台行動應用工程師",
                    "Python 開發工程師",
                    "後端開發工程師",
                  ]}
                  className="text-primary font-medium"
                />
              </p>
              <p className="mt-2">我專注於寫出最好的程式。</p>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild>
                <Link href="/projects">
                  查看我的專案 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://github.com/Mantouisyummy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:me@mantou.dev">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] mx-auto"
            style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, -50]) }}
          >
            <Card className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 animate-pulse border-0 shadow-none">
              <CardContent className="p-0">
                <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-primary/30 to-primary/5 animate-pulse [animation-delay:250ms]" />
                <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-primary/40 to-primary/10 animate-pulse [animation-delay:500ms]" />
                <div className="absolute inset-[30%] rounded-full overflow-hidden">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src="/avatar.png?height=400&width=400"
                      alt="Developer profile"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
