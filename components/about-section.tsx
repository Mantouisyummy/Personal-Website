"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { TypewriterEffect } from "./typewriter-effect";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  fullPage?: boolean;
}

export function AboutSection({ fullPage = false }: AboutSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className={cn("py-12 md:py-16 px-4 sm:px-6", fullPage ? "" : "container")}
    >
      {!fullPage && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 sm:mb-8 text-center"
        >
          關於我
        </motion.h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-square max-w-[280px] sm:max-w-[320px] mx-auto md:order-1 lg:order-none"
          style={{ y: imageY }}
        >
          <Card className="overflow-hidden rounded-lg border shadow-md h-full">
            <CardContent className="p-0 h-full">
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage
                  src="/placeholder.svg?height=500&width=500"
                  alt="Developer portrait"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <AvatarFallback className="w-full h-full text-4xl">
                  JD
                </AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-4 md:space-y-6 text-center md:text-left"
          style={{ y: textY }}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-semibold"
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            Mantouisyummy
          </motion.h3>
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            <p className="text-lg sm:text-xl mb-2">
              I'm passionate about{" "}
              <TypewriterEffect
                words={[
                  "web development",
                  "user experience",
                  "clean code",
                  "solving problems",
                  "learning new tech",
                ]}
                className="text-primary font-medium"
                typingSpeed={80}
              />
            </p>
          </motion.div>
          <motion.p
            className="text-muted-foreground text-sm sm:text-base"
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            My journey in software development began when I was studying
            computer science at University. Since then, I've worked with
            startups and established companies to create intuitive and
            performant digital experiences.
          </motion.p>
          <motion.p
            className="text-muted-foreground text-sm sm:text-base"
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            I specialize in React, Next.js, Node.js, and modern web
            technologies. I'm always exploring new frameworks and tools to stay
            at the cutting edge of web development.
          </motion.p>
          <motion.p
            className="text-muted-foreground text-sm sm:text-base"
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            When I'm not coding, you can find me hiking, reading sci-fi novels,
            or experimenting with new technologies.
          </motion.p>
          <motion.div
            className="pt-4 flex justify-center md:justify-start"
            custom={5}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            <Button>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {!fullPage && (
        <div className="flex justify-center mt-8 sm:mt-10">
          <Button variant="outline" asChild>
            <Link href="/about">Learn More About Me</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
