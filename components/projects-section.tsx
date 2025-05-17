"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Lava (協作)",
    description:
      "一台由 Lavalink 驅動且擁有眾多功能且完全開源、免費的Discord音樂機器人。",
    image:
      "https://raw.githubusercontent.com/Nat1anWasTaken/Lava/master/img/logo.png",
    tags: ["Python", "Lavalink", "Disord Bot", "Music"],
    githubUrl: "https://github.com/Nat1anWasTaken/Lava",
  },
  {
    id: 2,
    title: "TYStream Discord Bot",
    description:
      "一台全中文的 Discord 機器人，專為 Twitch & YouTube 直播通知而設計，讓你的社群不再錯過任何精彩直播！",
    image:
      "https://cdn.discordapp.com/icons/1345342376323055637/f207c076ddc7449d1d43a988b18ec5c1.png?size=1024",
    tags: ["Python", "Notification", "Disord Bot", "Twitch", "YouTube"],
    githubUrl: "https://github.com/Mantouisyummy/TYStream-DiscordBot",
    liveUrl:
      "https://discord.com/oauth2/authorize?client_id=1267467138839613553",
  },
  {
    id: 3,
    title: "TYStream",
    description: "TYStream 是用於 Twitch 與 Youtube 串流通知的 Python 函式庫。",
    image:
      "https://cdn.discordapp.com/icons/1345342376323055637/f207c076ddc7449d1d43a988b18ec5c1.png?size=1024",
    tags: ["Python", "Notification", "Package", "Twitch", "YouTube"],
    githubUrl: "https://github.com/Mantouisyummy/TYStream",
  },
];

interface ProjectsSectionProps {
  fullPage?: boolean;
}

export function ProjectsSection({ fullPage = false }: ProjectsSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const displayedProjects = fullPage ? projects : projects.slice(0, 3);

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
          精選專案
        </motion.h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            inView={inView}
            isHovered={hoveredProject === project.id}
            onHover={() => setHoveredProject(project.id)}
            onLeave={() => setHoveredProject(null)}
          />
        ))}
      </div>
      {!fullPage && (
        <div className="flex justify-center mt-8 sm:mt-10">
          <Button variant="outline" asChild>
            <Link href="/projects">查看更多專案</Link>
          </Button>
        </div>
      )}
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ProjectCard({
  project,
  index,
  inView,
  isHovered,
  onHover,
  onLeave,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    onLeave();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      ref={cardRef}
      className="tilt-card h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl border-opacity-50 bg-card/80 backdrop-blur-sm">
        <div className="relative overflow-hidden aspect-video tilt-card-image">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              isHovered ? "scale-110 brightness-110" : "scale-100"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 bg-primary/10 transition-opacity duration-300",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          />
        </div>
        <CardHeader className="tilt-card-content p-4 sm:p-6">
          <CardTitle className="transition-all duration-300 group-hover:text-primary text-lg sm:text-xl">
            {project.title}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 tilt-card-tags">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardFooter className="flex justify-between tilt-card-buttons p-4 sm:p-6 pt-0 sm:pt-0">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="transition-all duration-300 hover:scale-105 hover:shadow-md text-xs sm:text-sm"
          >
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" /> 源代碼
            </Link>
          </Button>
          {project.liveUrl && (
            <Button
              size="sm"
              asChild
              className="transition-all duration-300 hover:scale-105 hover:shadow-md text-xs sm:text-sm"
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                邀請
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
