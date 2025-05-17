"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface AboutTimelineProps {
  items: TimelineItem[];
}

export function AboutTimeline({ items }: AboutTimelineProps) {
  return (
    <div className="relative space-y-6 md:space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut",
          },
        },
      }}
      className="relative flex flex-col md:flex-row items-start md:justify-between md:even:flex-row-reverse group"
    >
      <Card
        className={cn(
          "w-full md:w-[45%] mt-3 md:mt-0",
          "transition-all duration-300 hover:shadow-lg hover:border-primary/50"
        )}
      >
        <CardHeader className="pb-2 p-3 sm:p-4 sm:pb-2">
          <div className="flex flex-wrap justify-between items-center">
            <CardTitle className="text-sm sm:text-base">{item.title}</CardTitle>
            <CardDescription className="text-xs">{item.period}</CardDescription>
          </div>
          <CardDescription className="text-xs sm:text-sm font-medium text-primary">
            {item.company}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2 p-3 sm:p-4 sm:pt-2">
          <p className="text-muted-foreground mb-3 text-xs sm:text-sm">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {item.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-primary/10 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
