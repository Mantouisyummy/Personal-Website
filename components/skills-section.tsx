"use client";

import type React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypewriterEffect } from "./typewriter-effect";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Vercel",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
        alt="Vercel"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "React",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        alt="Next.js"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="Tailwind CSS"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Python",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "FastAPI",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
        alt="FastAPI"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Flask",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
        alt="Flask"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Flutter",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
        alt="Flutter"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Dart",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
        alt="Dart"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Kotlin",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
        alt="Kotlin"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Git",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="Git"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Rust",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
        alt="Responsive Design"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "C",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
        alt="C"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "C++",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        alt="C++"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Go",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
        alt="Go"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Docker",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        alt="Docker"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Redis",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
        alt="Redis"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "SQLite",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
        alt="SQLite"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Supabase",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
        alt="Supabase"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Prisma",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
        alt="Prisma"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "SQLAlchemy",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg"
        alt="SQLAlchemy"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "MySQL",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
        alt="MySQL"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Arduino",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg"
        alt="Arduino"
        width={24}
        height={24}
      />
    ),
  },
];

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const categorizedSkills = [
    {
      category: "程式語言",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Dart",
        "Kotlin",
        "Rust",
        "Go",
        "C",
        "C++",
      ],
    },
    {
      category: "框架",
      skills: [
        "Node.js",
        "React",
        "Next.js",
        "FastAPI",
        "Flask",
        "Flutter",
        "Tailwind CSS",
        "Arduino",
      ],
    },
    {
      category: "資料庫",
      skills: ["MongoDB", "Redis", "SQLite", "Supabase", "MySQL"],
    },
    {
      category: "資料庫工具",
      skills: ["Prisma", "SQLAlchemy"],
    },
    {
      category: "工具與平台",
      skills: ["Docker", "Git", "Vercel"],
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 px-4 sm:px-6 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 md:mb-12"
        style={{ y }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 md:mb-4">
          技能與技術
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          我專精於{" "}
          <TypewriterEffect
            words={["跨平台行動應用開發", "後端開發", "Python 程式開發"]}
            className="text-primary font-medium"
          />
        </p>
      </motion.div>

      <div className="space-y-10">
        {categorizedSkills.map((group, groupIndex) => {
          const filteredSkills = skills.filter((s) =>
            group.skills.includes(s.name)
          );

          return (
            <div key={group.category}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05 + groupIndex * 0.2,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-3 sm:p-4">
                        <div className="p-2 sm:p-3 rounded-full bg-muted mb-2 sm:mb-3">
                          {skill.icon}
                        </div>
                        <Badge
                          variant="secondary"
                          className="font-medium text-xs sm:text-sm whitespace-nowrap"
                        >
                          {skill.name}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
