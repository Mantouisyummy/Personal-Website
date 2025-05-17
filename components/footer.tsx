"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaDiscord } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="text-lg sm:text-xl font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                  鰻頭
                </span>
                的個人網站
              </motion.div>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              一個展示我作為開發者的工作和技能的個人網站。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3 md:mb-4">快速導覽</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  主頁
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  關於我
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  我的專案
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold mb-3 md:mb-4">聯繫我</h3>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild>
                <motion.a
                  href="https://github.com/Mantouisyummy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </motion.a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <motion.a
                  href="https://discord.com/users/549056425943629825"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaDiscord className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </motion.a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <motion.a
                  href="mailto:me@mantou.dev"
                  whileHover={{ y: -3 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </motion.a>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-5 sm:my-6" />
        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Mantouisyummy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
